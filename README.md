<p align="center">
  <img src="./client/public/HealthHiveLogo.png" height="60">
  <h1 style="color:lightblue;" align="center">HealthHive: Real-Time RAG Assistant</h1>
</p>

## 📌 Overview

**HealthHive** is a real-time Q&A assistant built using **Pathway’s streaming platform** and **RAG (Retrieval-Augmented Generation)** techniques. It continuously ingests live data (support tickets, chats, documents), indexes it in real-time, and provides context-aware answers to user queries using LLMs. This assistant ensures enterprise teams receive answers grounded in the most current data.

---

## 🎯 What We Are Solving?

> We are Developing a real-time assistant that ingests enterprise data streams and offers Retrieval-Augmented Generation (RAG) based answers using the latest information.

This project solves the need for:
- Instant insights from incoming data (tickets, docs, chats).
- Reliable, up-to-date answers.
- Seamless integration with enterprise workflows.

---

## 🚀 Use Case: Enterprise Support Assistant

- 🔎 Employees ask technical or support questions via the web UI or Slack.
- 📥 Data (tickets, documentation updates, FAQs) is streamed and indexed in real-time using **Pathway**.
- 🧠 **RAG pipeline + LLM** retrieves and answers based on the most relevant, recent context.
- 📡 Results are streamed back instantly to the user via the interface or API.

---

## 🧠 Architecture ⤵️

```plaintext
+-------------------+      +------------------+       +-----------------------+
| Data Sources      | ---> | Pathway Pipeline | --->  | Vector Store (Chroma) |
| (Docs, Tickets)   |      |                  |       |                       |
+-------------------+      +------------------+       +----------+------------+
                                                                 |
                                                +----------------v--------------+
                                                | LLM + Retrieval (RAG Pipeline)|
                                                +----------------+--------------+
                                                                 |
                                                    +------------v-----------+
                                                    |   API / UI (React)     |
                                                    +------------------------+
