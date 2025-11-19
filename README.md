# Personal Minimal Blog

A clean, minimal personal blog perfect for technical writing, debugging stories, and tutorials. Built with Jekyll and optimized for GitHub Pages.

## Features

- **Minimal Design**: Clean, Substack-inspired aesthetic focused on readability
- **Responsive**: Works beautifully on all devices
- **Code Highlighting**: Syntax highlighting for code snippets
- **Comments**: Disqus integration ready
- **RSS Feed**: Auto-generated feed for subscribers
- **SEO Optimized**: Meta tags and sitemap included

## Quick Start

### 1. Customize Your Site

Edit `_config.yml` with your information:

```yaml
name: Your Name
description: Technical writing, debugging, and tutorials
url: https://yourusername.github.io
```

### 2. Update Social Links

In `_config.yml`, update the `footer-links` section:

```yaml
footer-links:
  email: your.email@example.com
  github: yourusername
  twitter: yourusername
  linkedin: yourusername
```

### 3. Add Your Avatar (Optional)

Uncomment and update the avatar line in `_config.yml`:

```yaml
avatar: https://github.com/yourusername.png
```

### 4. Customize About & Projects Pages

- Edit `about.md` to tell your story
- Edit `projects.md` to showcase your work

### 5. Write Your First Post

Create a new file in `_posts/` with the format: `YYYY-MM-DD-title.md`

```markdown
---
layout: post
title: My First Post
---

Your content here...
```

## Adding Comments with Disqus

1. Go to [disqus.com](https://disqus.com) and create an account
2. Click "Get Started" and choose "I want to install Disqus on my site"
3. Fill in your site details to create a new site
4. Copy your **Disqus shortname** (found in your site settings)
5. Add it to `_config.yml`:

```yaml
disqus: your-disqus-shortname
```

Comments will now appear at the bottom of all blog posts!

## Publishing to GitHub Pages

1. Make sure you're on your feature branch:
   ```bash
   git status
   ```

2. Add and commit your changes:
   ```bash
   git add .
   git commit -m "Update personal blog"
   ```

3. Push to GitHub:
   ```bash
   git push -u origin your-branch-name
   ```

4. Create a pull request and merge to your main branch

5. Your site will be live at: `https://yourusername.github.io`

## Writing Tips

### Code Blocks

Use triple backticks with language specification:

\`\`\`javascript
const example = "code";
\`\`\`

### Inline Code

Use single backticks: \`inline code\`

### Images

```markdown
![Alt text](/images/image.png)
```

### Links

```markdown
[Link text](https://example.com)
```

## Customization

### Colors

Edit `_sass/_variables.scss` to change colors:

```scss
$blue: #4183C4;
$black: #000;
$darkGray: #333;
```

### Fonts

Fonts are defined in `_sass/_variables.scss`:

```scss
$helveticaNeue: "Helvetica Neue", Helvetica, Arial, sans-serif;
$georgia: Georgia, serif;
```

### Layout Width

Adjust in `style.scss`:

```scss
.container {
  max-width: 680px; // Change this value
}
```

## Local Development (Optional)

To preview locally:

1. Install Ruby and Jekyll:
   ```bash
   gem install jekyll bundler
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Run locally:
   ```bash
   jekyll serve
   ```

4. View at: `http://localhost:4000`

## File Structure

```
.
├── _config.yml          # Site configuration
├── _layouts/            # Page templates
│   ├── default.html     # Base template
│   ├── post.html        # Blog post template
│   └── page.html        # Page template
├── _posts/              # Your blog posts (add new posts here)
├── _sass/               # SCSS partials
├── about.md             # About page
├── projects.md          # Projects page
├── index.html           # Homepage
└── style.scss           # Main stylesheet
```

## Support

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Markdown Guide](https://www.markdownguide.org/)

## License

MIT License - feel free to use and modify as you wish!

---

**Happy blogging!** 🚀
