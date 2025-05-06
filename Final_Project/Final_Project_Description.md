# Bioethics: The Cost of Innovation – Final Project Documentation

https://momcilomr6531.github.io/Home.html
---

## Screen Recording


[Watch the Demo Video on Google Drive]( https://drive.google.com/file/d/1-Hdxp-yn-Ti4INxr7r0m7gOkPEFK7H8A/view?usp=drive_link )

> The file was too large for GitHub, so it's hosted on Google Drive.

##  Project Summary
**Bioethics: The Cost of Innovation** is a multi-page website that introduces visitors to three controversial technological advancements: **Bioprinting**, **Genome Editing**, and **Cybernetics**. The project aims to create an informative and visually engaging space where users can learn about these topics and reflect on their ethical implications. The site includes interactive voting pages, allowing users to express whether they support or oppose each innovation. Their votes are stored using `localStorag...

--- 

##  Code Snippet I'm proud of & Explanation
```javascript
function updateVoteSummary(key, elementId, label) {
  const vote = localStorage.getItem(key);
  const el = document.getElementById(elementId);
  if (vote === 'advocate') {
    el.textContent = `✓ You voted in favor of ${label}.`;
  } else if (vote === 'against') {
    el.textContent = `✕ You voted against ${label}.`;
  } else {
    el.textContent = `You haven’t voted on ${label} yet.`;
  }
}
```
**What it does**: This function reads the stored vote data from `localStorage` and dynamically updates a message under each technology on the homepage, reflecting the user’s previous choice.

**What I learned**: I learned how to use `localStorage` to persist user interaction data across sessions, which allows for a more personalized and interactive experience.

---

##  Notes
### What I Struggled With
- Getting image backgrounds and foreground content to align properly while maintaining consistent visual design.
- Ensuring that all vote results updated dynamically without needing a server or database.
- Styling issues with image proportions and border radius not behaving as expected.

###  What I'm Proud Of
- Fully responsive design using Flexbox.
- Interactive voting system using just vanilla JavaScript.
- Clean and thematic design, unified across all pages.
- Good use of modern CSS practices including transitions and hover states.

### ⏭️What I Would Add Next
- Server-side database to aggregate real votes from all users.
- Improved form handling with custom validation and feedback.
- Dark mode toggle.
- More accessibility improvements (e.g., ARIA labels, skip links).

