# Домашнее задание к занятию React: Props + TypeScript (Etsy Listing)

## HW_React_Props_and_Typescript — (Vite + React + TypeScript)

[![Deploy to GitHub Pages](https://github.com/SadliyVI/HW_React_Props_and_Typescript/actions/workflows/main.yml/badge.svg)](https://github.com/SadliyVI/HW_React_Props_and_Typescript/actions/workflows/main.yml)

Проект на **Vite + React**, демонстрирующий вывод списка предложений каталога **Etsy.com**.

---

## Онлайн-демонстрация

- GitHub Pages: <https://sadliyvi.github.io/HW_React_Props_and_Typescript/>

---

## Требования по заданию (что реализовано)

- Используется **React + Vite**
- Весь код на **TypeScript**
- Все `props` **типизированы**
- Тип `any` **не используется**
- Данные берутся из `etsy.json` (импорт JSON в TS)
- Отрисовка сетки карточек в стиле из `style.css`
- Для карточки используются поля:
  - `listing_id`
  - `url`
  - `MainImage.url_570xN`
  - `title`
  - `currency_code`
  - `price`
  - `quantity`
- Ограничение длины заголовка:
  - если `title` > 50 символов → показываются первые 50 + `…`
- Формат цены:
  - `USD` → `$50.00`
  - `EUR` → `€50.00`
  - `GBP` → `£50.00`
  - другие валюты → `CAD 50.00`
- Подсветка остатка по `quantity`:
  - `<= 10` → `stock-low`
  - `<= 20` → `stock-medium`
  - `> 20` → `stock-high`

---

## Стек

- React 19
- TypeScript
- Vite
- GitHub Pages (деплой через GitHub Actions)

---
