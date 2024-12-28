# ALAB-318-2-1: Star Wars Dark Side Form Application

Welcome to the **Star Wars Dark Side Form Application**! This project is designed to let users join the Dark Side, complete with interactive features and, of course, "Wookie Cookies". 🚀

---

## 🌌 **Project Description**

This application leverages **Node.js**, **Express**, and **EJS templates** to create an engaging Star Wars-themed experience. Users can interact with the application by submitting their name to the Dark Side, receiving a fun message with a Star Wars-themed design.

---

## 🔍 **Features**

- **Interactive Form Submission**: Users can submit their name to join the Dark Side and receive a customized message.
- **Dynamic Templates**: Built with EJS for dynamic and reusable HTML templates.
- **Stylized Design**: Uses custom fonts and CSS for a Star Wars-inspired look.
- **Server-side Rendering**: Powered by Express for efficient request handling.

---

## 🛠️ **Technologies Used**

- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white) **Node.js**
- ![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white) **Express.js**
- ![EJS](https://img.shields.io/badge/EJS-1C1E24?style=flat-square) **EJS Templates**
- ![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css3&logoColor=white) **CSS**
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) **JavaScript**

---

## 📂 **Project Structure**

```
📦 Project Root
├── 📁 routes
│   ├── darkside.js       # Dark Side route handling
│   ├── index.js          # Homepage route
│   ├── lightside.js      # Light Side route handling
├── 📁 views
│   ├── darkside.ejs      # Dark Side page template
│   ├── index.ejs         # Homepage template
│   ├── lightside.ejs     # Light Side page template
│   ├── submit.ejs        # Submission result template
├── 📁 public
│   ├── 📁 images         # Images for the application
│   ├── 📁 stylesheets    # CSS styles
├── app.js                # Main server entry point
├── package.json          # Node.js dependencies and scripts
└── README.md             # Project documentation
```

---

## 🚀 **How to Run the Project**

### Prerequisites:

- Node.js installed on your machine
- Basic understanding of terminal commands

### Steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/ALAB-318-2-1.git
   cd ALAB-318-2-1
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Server**:

   ```bash
   nodemon app.js
   ```

4. **Open the Application**:
   - Navigate to [http://localhost:3000](http://localhost:3000) in your browser.
   - Alternatively, view the live application at [https://alab-318-2-1-star-wars-dark-side-form.onrender.com/](https://alab-318-2-1-star-wars-dark-side-form.onrender.com/).

---

## 🎨 **Customization**

### Fonts

- The project uses the custom **StarJedi** font for a Star Wars aesthetic.
- Font file location: `public/fonts/Starjedi.ttf`.

### Colors and Styles

- Update the `style.css` file in the `public/stylesheets/` directory to customize colors, shadows, and spacing.

---

## 🌟 **Routes Overview**

| Route                    | Description            |
| ------------------------ | ---------------------- |
| `/`                      | Homepage               |
| `/darksideRouter`        | Join the Dark Side     |
| `/darksideRouter/submit` | Submission result page |
| `/lightsideRouter`       | Explore the Light Side |

---

## 🛠️ **Future Enhancements**

- Add more interactive features for Light Side and Dark Side routes.
- Include additional Star Wars-themed animations.
- Enhance mobile responsiveness.

---

## 📜 **License**

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 **Acknowledgments**

- Star Wars API and community for the inspiration.
- Font: [StarJedi.ttf](https://www.dafont.com/star-jedi.font)

---

May the Force be with you as you explore this project! 🚀
