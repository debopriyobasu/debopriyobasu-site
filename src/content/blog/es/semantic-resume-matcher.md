---
title: "Construyendo un comparador semántico de currículums - Offline, privado y realmente inteligente"
description: "Cómo construí un sistema de emparejamiento de currículums completamente local e impulsado por IA que respeta la privacidad de los datos, elimina los costes de API en la nube y va mucho más allá de la búsqueda de palabras clave."
date: 2026-06-26
---

La contratación a gran escala está rota. No porque a las empresas les falten candidatos, sino porque las herramientas utilizadas para identificar a los adecuados son vergonzosamente primitivas para 2026. Construí **Semantic Resume Matcher** para solucionar esto, y hacerlo completamente sin conexión.

## El problema con los ATS tradicionales

Si alguna vez ha solicitado un empleo y no ha recibido respuesta a pesar de estar claramente calificado, es casi seguro que haya sido rechazado por un Sistema de Seguimiento de Candidatos (ATS, por sus siglas en inglés), no por un ser humano. Estos sistemas funcionan escaneando currículums en busca de coincidencias exactas de palabras clave con una descripción de puesto. Si un candidato escribe "desarrolló pipelines distribuidos" y el listado de trabajo dice "experiencia en ingeniería de datos", el sistema ve una coincidencia nula. El candidato es filtrado antes de que un reclutador llegue a ver su perfil.

Esto no solo es malo para los candidatos. Es malo para las empresas. El talento real se pierde porque una máquina no puede entender el *significado*, solo la ortografía.

## El problema de la IA en la nube

La solución obvia (usar un modelo de lenguaje para entender los currículums) introduce un nuevo conjunto de problemas. Los currículums están entre los documentos más sensibles que posee una persona. Contienen nombres legales completos, direcciones, historial de empleo y a veces expectativas salariales. Enviar esos datos a una API de nube de terceros (OpenAI, Anthropic, Gemini) es un campo de minas para el cumplimiento de GDPR y CCPA, y un riesgo legal directo en muchas jurisdicciones.

A esto se añade el coste: realizar inferencia de modelos de lenguaje sobre miles de currículums con precios de API en la nube se vuelve prohibitivamente caro muy rápido. Está pagando por token por datos que no posee, procesados en una infraestructura que no controla.

## La solución: Local, semántica y explicable

Semantic Resume Matcher es un sistema de emparejamiento de currículums con puestos de trabajo de nivel empresarial que se ejecuta **completamente en su propia máquina**. Ningún dato sale de su red local. Combina tres técnicas que, juntas, producen algo genuinamente útil:

1. **Extracción estructurada impulsada por LLM**: Un modelo local (Gemma 3 o Llama 3.2, servido a través de Ollama) lee el texto crudo del currículum en PDF y extrae un perfil JSON limpio y validado: habilidades, historial de trabajo, educación. Sin necesidad de clave API de nube.
2. **Búsqueda vectorial semántica**: Tanto los perfiles de los candidatos como las descripciones de los puestos se codifican como vectores de alta dimensión utilizando `nomic-embed-text`, ejecutándose también de manera local. La búsqueda de similitud del coseno se realiza directamente dentro de PostgreSQL a través de la extensión `pgvector`. Un candidato que "diseñó microservicios" coincidirá con un rol que busque "experiencia en sistemas distribuidos", ya que los vectores comprenden la proximidad del significado.
3. **Reglas de negocio deterministas**: Antes de que se muestre cualquier coincidencia, se aplican restricciones estrictas: requisitos de patrocinio de visado, alineación del rango salarial y preferencias de ubicación o trabajo remoto. La IA no puede alucinar con estas reglas. Son aplicadas por la consulta de la base de datos, no por el modelo.

## Explicabilidad, no una caja negra

La parte de la que estoy más orgulloso es la capa de análisis de idoneidad. Para cada coincidencia, el sistema genera una explicación en lenguaje natural: por qué este candidato encaja, cuáles son sus fortalezas destacadas en relación con el puesto y, de manera crítica, qué brechas de habilidades existen. A los reclutadores no se les entrega una puntuación para que confíen ciegamente. Obtienen un informe legible que les ayuda a decidir si avanzar con el candidato y qué explorar en la entrevista.

## La tecnología utilizada

El backend es un servicio de **FastAPI** con SQLAlchemy asíncrono, validación Pydantic, registro JSON estructurado y propagación de ID de traza de solicitud. La base de datos es **PostgreSQL 15** con migraciones de esquema gestionadas por Alembic y operaciones vectoriales manejadas por **pgvector**. Los modelos de lenguaje y embeddings son servidos localmente por **Ollama**. El frontend es un panel de **React + Vite** con gráficos de telemetría en tiempo real, un flujo de carga de currículums y un panel de coincidencia comparativa con indicadores circulares de puntuación. Todo el sistema se inicia con un único `docker compose up`.

## Por qué es importante

Este proyecto no es solo una demostración para el portfolio. Es una prueba de concepto de que hoy en día es posible una contratación asistida por IA responsable, privada y rentable, sin depender de la infraestructura en la nube de las grandes empresas tecnológicas. Los modelos de código abierto locales son lo suficientemente buenos para realizar extracción estructurada y razonamiento semántico. Postgres es lo suficientemente potente para hacer búsqueda vectorial. No necesita enviar un solo byte de información personal identificable del candidato a un servidor externo.

El código fuente está completamente abierto en [GitHub](https://github.com/debopriyobasu/semantic-resume-matcher). Me encantaría recibir comentarios de cualquier persona que trabaje en el ámbito de las herramientas de reclutamiento o que esté pensando en sistemas de IA locales primero.
