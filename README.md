
# Stock Trading Platform

A full-stack stock trading platform inspired by modern brokerage applications, built with React, Node.js, Express, and MongoDB.

The project provides a responsive trading-oriented interface with portfolio views, stock watchlists, order placement, pricing information, and a backend API for persisting trading orders.

## 🚀 Live Demo

Coming soon.

## 🔗 Repository

https://github.com/Rishav060/stock-trading-platform

---

## 📌 Overview

This project is a full-stack implementation of a modern stock brokerage platform.

It is divided into three major applications:

- **Frontend** — Public-facing brokerage website built with React
- **Dashboard** — Trading dashboard for interacting with watchlists and orders
- **Backend** — REST API built with Node.js and Express, connected to MongoDB

The project focuses on understanding how a real-world full-stack application can be structured across multiple services and how frontend trading actions communicate with a persistent backend.

---

## ✨ Features

### 🌐 Landing Website

- Responsive brokerage-style homepage
- Navigation across major sections
- Product and ecosystem information
- Pricing section
- Educational resources section
- Support page
- Account signup interface
- Responsive Bootstrap-based layout
- Local image and SVG asset integration

### 📊 Trading Dashboard

- Stock watchlist interface
- Buy/Sell interaction flow
- Order quantity and price inputs
- Trading action window
- Portfolio-oriented dashboard structure
- React Context API for managing trading UI state
- API communication with backend services

### 💹 Order Management

- Place buy orders from the dashboard
- Store order details in MongoDB
- Retrieve previously stored orders
- REST API-based communication between frontend and backend

### 🗄️ Backend

- Node.js + Express REST API
- MongoDB database integration using Mongoose
- CORS configuration
- JSON request handling
- Holdings API
- Positions API
- Order creation API
- Order retrieval API

---

## 🏗️ Architecture

```text
                    ┌─────────────────────┐
                    │   React Frontend    │
                    │  Landing Website    │
                    └──────────┬──────────┘
                               │
                               │
                    ┌──────────▼──────────┐
                    │   React Dashboard   │
                    │ Watchlist / Orders   │
                    └──────────┬──────────┘
                               │
                         REST API
                               │
                    ┌──────────▼──────────┐
                    │ Node.js + Express   │
                    │      Backend        │
                    └──────────┬──────────┘
                               │
                           Mongoose
                               │
                    ┌──────────▼──────────┐
                    │       MongoDB       │
                    │   Orders / Data     │
                    └─────────────────────┘
