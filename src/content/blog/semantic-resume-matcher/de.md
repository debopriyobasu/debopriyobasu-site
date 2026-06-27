---
title: "Entwicklung eines Semantic Resume Matcher: Offline, privat und wirklich intelligent"
description: "Wie ich ein vollständig lokales, KI-gestütztes System zur Lebenslaufprüfung entwickelt habe, das den Datenschutz respektiert, Cloud-API-Kosten eliminiert und weit über die reine Stichwortsuche hinausgeht."
date: 2026-06-26
tags: ["KI", "Postgres", "FastAPI", "React"]
---

Die Personalbeschaffung im großen Stil ist fehlerhaft. Nicht, weil es den Unternehmen an Kandidaten mangelt, sondern weil die Werkzeuge zur Identifizierung der richtigen Personen für das Jahr 2026 beschämend primitiv sind. Ich habe den **Semantic Resume Matcher** entwickelt, um dieses Problem zu beheben, und zwar vollständig offline.

## Das Problem mit traditionellen ATS

Wenn Sie sich jemals um eine Stelle beworben und trotz offensichtlicher Qualifikation keine Rückmeldung erhalten haben, wurden Sie mit Sicherheit von einem Bewerber-Tracking-System (ATS) abgelehnt, nicht von einem Menschen. Diese Systeme funktionieren, indem sie Lebensläufe nach exakten Stichwortübereinstimmungen mit einer Stellenbeschreibung durchsuchen. Wenn ein Kandidat schreibt: "verteilte Pipelines aufgebaut" und in der Stellenausschreibung steht: "Erfahrung im Data Engineering", sieht das System null Überschneidung. Der Kandidat wird herausgefiltert, bevor ein Personalverantwortlicher sein Profil überhaupt zu Gesicht bekommt.

Dies ist nicht nur schlecht für die Kandidaten. Es ist auch schlecht für die Unternehmen. Wahre Talente schlüpfen durch die Maschen, weil eine Maschine keine *Bedeutung* verstehen kann, sondern nur die Schreibweise.

## Das Cloud-KI-Problem

Die offensichtliche Lösung (die Verwendung eines LLM zum Verstehen von Lebensläufen) bringt neue Probleme mit sich. Lebensläufe gehören zu den sensibelsten Dokumenten, die eine Person besitzt. Sie enthalten vollständige Namen, Adressen, den Beschäftigungsverlauf und manchmal auch Gehaltserwartungen. Das Senden dieser Daten an eine Cloud-API von Drittanbietern (OpenAI, Anthropic, Gemini) ist ein Minenfeld für die DSGVO und stellt in vielen Ländern ein direktes rechtliches Risiko dar.

Hinzu kommen die Kosten: Die Durchführung von LLM-Inferenzen für Tausende von Lebensläufen zu Cloud-API-Preisen wird schnell unerschwinglich teuer. Sie zahlen pro Token für Daten, die Sie nicht besitzen, verarbeitet auf einer Infrastruktur, die Sie nicht kontrollieren.

## Die Lösung: Lokal, semantisch und erklärbar

Der Semantic Resume Matcher ist ein professionelles System zum Abgleich von Lebensläufen mit Stellenbeschreibungen, das **vollständig auf Ihrem eigenen Rechner** läuft. Es werden keine Daten an Ihr lokales Netzwerk übertragen. Es kombiniert drei Techniken, die zusammen ein wirklich nützliches Werkzeug ergeben:

1. **LLM-gestützte strukturierte Extraktion**: Ein lokales Modell (Gemma 3 oder Llama 3.2, bereitgestellt über Ollama) liest den Text des PDF-Lebenslaufs und extrahiert ein sauberes, validiertes JSON-Profil mit Fähigkeiten, Arbeitsverlauf und Ausbildung. Kein Cloud-API-Schlüssel erforderlich.
2. **Semantische Vektorsuche**: Kandidatenprofile und Stellenbeschreibungen werden mit `nomic-embed-text` (ebenfalls lokal ausgeführt) als hochdimensionale Vektoren codiert. Die Kosinus-Ähnlichkeitssuche wird direkt in PostgreSQL über die Erweiterung `pgvector` durchgeführt. Ein Kandidat, der "Mikrodienste entworfen hat", passt zu einer Rolle, die "Erfahrung mit verteilten Systemen" sucht, da die Vektoren die semantische Nähe verstehen.
3. **Deterministische Geschäftsregeln**: Bevor ein Treffer angezeigt wird, werden harte Bedingungen angewendet: Visumsanforderungen, Gehaltsvorstellungen sowie Standort- oder Remote-Präferenzen. Die KI kann sich über diese Regeln nicht hinwegsetzen. Sie werden durch die Datenbankabfrage erzwungen, nicht durch das Modell.

## Erklärbarkeit statt Black Box

Der Teil, auf den ich am stolzesten bin, ist die Passform-Analyse. Für jeden Treffer generiert das System eine Erklärung in natürlicher Sprache: Warum dieser Kandidat passt, was seine herausragenden Stärken im Vergleich zur Rolle sind und (ganz wichtig) welche Qualifikationslücken bestehen. Personalverantwortliche erhalten nicht einfach eine Punktzahl, auf die sie blind vertrauen müssen. Sie bekommen einen lesbaren Bericht, der ihnen bei der Entscheidung hilft, ob sie einen Kandidaten zum Gespräch einladen und welche Fragen sie stellen sollten.

## Die Technologie

Das Backend ist ein **FastAPI**-Dienst mit asynchronem SQLAlchemy, Pydantic-Validierung, strukturierter JSON-Protokollierung und Trace-ID-Weiterleitung für Anfragen. Die Datenbank ist **PostgreSQL 15** mit Schema-Migrationen über Alembic und Vektor-Operationen über **pgvector**. Die LLMs und Embeddings werden lokal von **Ollama** bereitgestellt. Das Frontend ist ein Dashboard in **React + Vite** mit Echtzeit-Telemetriediagrammen, einem Upload-Bereich für Lebensläufe und einer Gegenüberstellung der Treffer mit kreisförmigen Score-Anzeigen. Das gesamte System lässt sich mit einem einfachen `docker compose up` starten.

## Warum es wichtig ist

Dieses Projekt ist nicht nur eine Portfolio-Demo. Es ist der Beweis, dass eine verantwortungsvolle, private und kostengünstige KI-gestützte Personalbeschaffung heute möglich ist, ohne von der Cloud-Infrastruktur der großen Tech-Konzerne abhängig zu sein. Lokale Open-Source-Modelle sind gut genug, um strukturierte Extraktionen und semantische Analysen durchzuführen. Postgres ist leistungsstark genug für die Vektorsuche. Sie müssen kein einziges Byte personenbezogener Daten des Kandidaten an einen externen Server senden.

Der Quellcode ist vollständig offen auf [GitHub](https://github.com/debopriyobasu/semantic-resume-matcher) verfügbar. Ich freue mich über Feedback von allen, die im Bereich Recruiting-Tools arbeiten oder über lokale KI-Systeme nachdenken.
