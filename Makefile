.PHONY: help setup install dev build start lint format clean update

help:
	@echo "make setup   - Install dependencies (requires Node.js & npm)"
	@echo "make dev     - Start development server"
	@echo "make build   - Build for production"
	@echo "make lint    - Run ESLint"
	@echo "make format  - Format code with Prettier"
	@echo "make clean   - Clean build artifacts"
	@echo "make update  - Update Node.js & npm (documentation only)"

setup:
	@command -v node >/dev/null 2>&1 || { echo "❌ Node.js not found"; exit 1; }
	@command -v npm >/dev/null 2>&1 || { echo "❌ npm not found"; exit 1; }
	npm ci

install:
	@echo "📦 Installing dependencies..."
	npm install

dev: install
	@echo "🚀 Starting development server..."
	npm run dev

build: install
	@echo "🏗️  Building for production..."
	npm run build

start: install
	@echo "▶️  Starting production server..."
	npm run start

lint: install
	@echo "🔍 Running ESLint..."
	npm run lint

format: install
	npm run format

clean:
	rm -rf .next out node_modules .turbo

update:
	@echo "Updating Node.js & npm (documentation only, versions are frozen):"
	@echo "  nvm install node"
	@echo "  nvm use node"
	@echo "  npm install -g npm@latest"
