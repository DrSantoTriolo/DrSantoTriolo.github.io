---
layout: post
title: "Website Marketing Essentials"
date: 2025-07-27
description: "A guide to optimizing your site for visibility and search performance with SEO best practices, Google Analytics, and essential web files."
tags: [SEO, marketing, meta tags, Google Analytics, Jekyll, GitHub Pages]
---

> Good SEO isn't just about traffic—it's about *visibility*, *structure*, and *strategy*.

If you're building a personal blog or website with GitHub Pages and Jekyll, you might wonder how to make your site discoverable and useful to both users and search engines. In this post, we'll cover practical ways to enhance your site's **marketing readiness** through:

- SEO optimization
- Meta tags
- Keywords
- Google Analytics
- Core files like `robots.txt`, `sitemap.xml`, and `llms.txt`

---

## 🚀 SEO Optimization Basics

Search Engine Optimization (SEO) helps search engines understand what your site is about and rank it accordingly.

### ✅ Use Relevant Keywords

1. Research terms your audience might search for using tools like:
   - [Google Keyword Planner](https://ads.google.com/home/tools/keyword-planner/)
   - [Ubersuggest](https://neilpatel.com/ubersuggest/)
   - [Ahrefs](https://ahrefs.com/keywords-explorer)

2. Naturally integrate these keywords in:
   - Titles (`<h1>`)
   - Subheadings
   - Meta descriptions
   - URLs (slug)
   - Image `alt` tags

---

## 🏷️ Meta Tags for SEO

Meta tags improve how your pages appear in search results and when shared on social media.

Here’s an example of meta tags in your Jekyll layout (e.g., `_includes/head.html`):

```html
<meta name="description" content="{{ page.description | default: site.description }}">
<meta name="keywords" content="SEO, marketing, Jekyll, meta tags, GitHub Pages">
<meta name="author" content="Your Name">

<!-- Open Graph for social media -->
<meta property="og:title" content="{{ page.title }}">
<meta property="og:description" content="{{ page.description }}">
<meta property="og:type" content="website">
<meta property="og:url" content="{{ site.url }}{{ page.url }}">
<meta property="og:image" content="{{ site.url }}/assets/images/seo-thumbnail.png">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{{ page.title }}">
<meta name="twitter:description" content="{{ page.description }}">
```
