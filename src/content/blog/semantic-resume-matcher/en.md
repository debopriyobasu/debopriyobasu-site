---
title: "Building a Semantic Resume Matcher - Offline, Private, and Actually Smart"
description: "How I built a fully local, AI-powered resume matching system that respects data privacy, eliminates cloud API costs, and goes far beyond keyword search."
date: 2026-06-26
tags: ["AI", "Postgres", "FastAPI", "React"]
---

Hiring at scale is broken. Not because companies lack candidates, but because the tools used to surface the right ones are embarrassingly primitive for 2026. I built **Semantic Resume Matcher** to fix that, and to do it entirely offline.

## The Problem With Traditional ATS

If you have ever applied for a job and heard nothing back despite being clearly qualified, you have almost certainly been rejected by an Applicant Tracking System (ATS), not a human. These systems work by scanning resumes for exact keyword matches against a job description. If a candidate writes "built distributed pipelines" and the job listing says "data engineering experience," the system sees zero overlap. The candidate is filtered out before a recruiter ever sees their profile.

This is not just bad for candidates. It is bad for companies. Real talent slips through the cracks because a machine cannot understand *meaning*, only spelling.

## The Cloud AI Problem

The obvious fix (using an LLM to understand resumes) introduces a new set of problems. Resumes are among the most sensitive documents a person owns. They contain full legal names, addresses, employment history, and sometimes salary expectations. Sending that data to a third-party cloud API (OpenAI, Anthropic, Gemini) is a GDPR and CCPA minefield, and an outright legal risk in many jurisdictions.

Add to that the cost: running LLM inference across thousands of resumes at cloud API pricing becomes prohibitively expensive fast. You are paying per token for data you do not own, processed on infrastructure you do not control.

## The Solution: Local, Semantic, and Explainable

Semantic Resume Matcher is an enterprise-grade resume-to-job matching system that runs **entirely on your own machine**. No data ever leaves your local network. It combines three techniques that, together, produce something genuinely useful:

1. **LLM-powered structured extraction**: A local model (Gemma 3 or Llama 3.2, served via Ollama) reads raw PDF resume text and extracts a clean, validated JSON profile: skills, work history, education. No cloud API key required.
2. **Semantic vector search**: Candidate profiles and job descriptions are both encoded as high-dimensional vectors using `nomic-embed-text`, also running locally. Cosine similarity search is performed directly inside PostgreSQL via the `pgvector` extension. A candidate who "architected microservices" will match a role seeking "distributed systems experience," as the vectors understand proximity of meaning.
3. **Deterministic business rule guardrails**: Before any match is surfaced, hard constraints are applied: visa sponsorship requirements, salary range alignment, and location or remote preferences. The AI cannot hallucinate its way past these. They are enforced by the database query, not the model.

## Explainability, Not a Black Box

The part I am most proud of is the fit analysis layer. For each match, the system generates a natural language explanation: why this candidate fits, what their standout strengths are relative to the role, and, critically, what skill gaps exist. Recruiters are not handed a score and told to trust it. They get a readable brief that helps them decide whether to move a candidate forward and what to probe in the interview.

## The Stack

The backend is a **FastAPI** service with async SQLAlchemy, Pydantic validation, structured JSON logging, and request trace-ID propagation. The database is **PostgreSQL 15** with schema migrations managed by Alembic and vector operations handled by **pgvector**. The LLMs and embeddings are served locally by **Ollama**. The frontend is a **React + Vite** dashboard with real-time telemetry charts, a resume upload flow, and a side-by-side matching panel with circular match score indicators. The entire stack stands up with a single `docker compose up`.

## Why It Matters

This project is not just a portfolio demo. It is a proof of concept that responsible, private, cost-effective AI-assisted hiring is possible today, without depending on Big Tech cloud infrastructure. Local open-source models are good enough to do structured extraction and semantic reasoning. Postgres is powerful enough to do vector search. You do not need to send a single byte of candidate PII to an external server.

The source code is fully open on [GitHub](https://github.com/debopriyobasu/semantic-resume-matcher). I would love to hear feedback from anyone working in the recruiting tools space or thinking about local-first AI systems.
