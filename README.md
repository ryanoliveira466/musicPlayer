# Projeto MusicPlayer e ImageFilter

<img src="https://cdn-icons-png.flaticon.com/512/295/295129.png"  width=250>

---

#### Projeto pessoal onde há funcionalidades de um tocador de música juntamente com filtros de imagens no site(em andamento)

---

[ryanoliveira466.github.io/musicPlayer](https://ryanoliveira466.github.io/musicPlayer/)


## ⬇️

## ⬇️

## ⬇️

 

# Tips for CSS Animation 

## ✅ vh (Viewport Height) & vw (Viewport Width)
* ✅ Great for fluid, responsive animations that adapt to screen size.
* ✅ Ideal for full-screen effects, such as sliding elements in/out.
* ⚠️ Can be choppy if the viewport resizes often (e.g., mobile keyboards appearing).

🔹 Example: Smooth slide-in using vh

```css
@keyframes slide-in {
    from {
        transform: translateY(100vh); /* Start off-screen */
    }
    to {
        transform: translateY(0); /* End at normal position */
    }
}

.box {
    animation: slide-in 1s ease-in-out;
}

```

---

## ✅ % (Percentage)
* ✅ Best for moving elements within their container (not the whole screen).
* ✅ Works well with relative positioning (position: absolute;).
* ⚠️ Depends on parent size, so animations might behave unexpectedly in nested elements.


🔹 Example: Move an element across its container using %

```css
@keyframes move-right {
    from {
        left: 0%;
    }
    to {
        left: 100%;
    }
}

.box {
    position: absolute;
    animation: move-right 2s linear infinite;
}

```

---

## ✅ px (Pixels)
* ✅ Best for precise, small movements that shouldn't scale with screen size.
* ⚠️ Not fluid on different screen sizes.
 
 🔹 Example: A small bounce effect using px

```css
@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

.box {
    animation: bounce 0.5s ease-in-out infinite;
}

```

---

## 🎯 So, What’s More Fluid?
* For full-screen animations → Use vh or vw.
* For container-based movement → Use %.
* For precise movements → Use px.
* For responsiveness → Avoid px, prefer vh/vw or %.

 

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br> 


 






# 🎯 What is @media (pointer: coarse)?
The pointer: coarse media feature is used in CSS Media Queries to detect if a device has a touchscreen with a coarse (low precision) pointer, like a finger (instead of a precise mouse or stylus).

---

## ✅ How to Use It
You can use @media (pointer: coarse) to style elements differently for touchscreens:

```css
@media (pointer: coarse) {
  /* Applies to touchscreens */
  button {
    padding: 20px; /* Make buttons larger for touch */
    font-size: 18px;
  }
}
```










<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br> 

 

 
# Full-Height Strategy with `vh`

Using **`vh` (viewport height)** is a great strategy for making elements cover the full screen! Let's break it down and explore different **full-height layout strategies** using `vh`.

---

## 🎯 **What is `vh`?**
- `1vh` = **1% of the viewport height** (the visible area of the screen).  
- `100vh` = **100% of the screen height** (full screen).  

🔹 Example: A **full-screen div**  
```css
.fullscreen {
  height: 100vh;
  background: blue;
}
```

---

## ✅ **1. Full-Screen Hero Section**
A **hero section** that always takes up the whole screen: 

```css
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('image.jpg') center/cover no-repeat;
  color: white;
}
```
💡 **Why use `vh`?**  
It ensures the hero section always **fills the screen**, even when resized.

---

## ✅ **2. Multiple Full-Height Sections (Scroll Snap)**
If you want **multiple sections** that each take up **one full screen**, try this:
```css
section {
  height: 100vh;
  scroll-snap-align: start;
}
.container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
}
```
💡 **How it works?**  
- Each `<section>` takes up **100vh**.  
- `scroll-snap-type` makes them **scroll smoothly one by one**.  

---

## ✅ **3. Fixing Mobile `vh` Issues (Custom `--vh` Unit)**
🔹 **Problem:** On mobile browsers, **100vh can be buggy** because the browser UI (address bar) changes the viewport height when scrolling.  
🔹 **Solution:** Use JavaScript to calculate a **correct `vh` value**:
```javascript
function setVH() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
window.addEventListener('resize', setVH);
setVH();
```
Now, use it in CSS:  
```css
.fullscreen {
  height: calc(var(--vh) * 100);
}
```
✅ This **fixes mobile issues** by dynamically updating `vh`!

---

## ✅ **4. Full-Screen Modals or Overlays**
If you want a **popup/modal** that takes up the full screen:  
```css
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}
```
💡 **Why `100vh`?**  
- Ensures the modal **always** covers the entire screen, even if the page is scrollable.  

---

## 🎯 **Summary: When to Use `vh`?**
✅ **Full-screen hero sections**  
✅ **Full-page scrolling sections**  
✅ **Modals and overlays**  
✅ **Mobile-friendly full-page elements** (but fix `vh` for mobile issues)  

---

 

