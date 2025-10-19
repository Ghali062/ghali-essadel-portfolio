# CV Download Setup Instructions

## How to Add Your CV to the Portfolio

1. **Export your CV as PDF**
   - Name it: `CV_Ghali_Essadel.pdf`

2. **Place the PDF in the public folder**
   - Copy your CV file to: `public/CV_Ghali_Essadel.pdf`

3. **That's it!**
   - The Download CV button is already configured
   - It will automatically work once you place the file

## Alternative: Use a different filename

If you want to use a different filename:

1. Place your PDF in the `public/` folder
2. Edit `src/components/Main.tsx`
3. Change the href path on line with `download-cv-btn`:
   ```tsx
   <a href="/YOUR_FILENAME.pdf" download="Ghali_Essadel_CV.pdf" className="download-cv-btn">
   ```

## Current Setup
- Button location: Hero section (top of page)
- File expected: `/public/CV_Ghali_Essadel.pdf`
- Download name: `Ghali_Essadel_CV.pdf`
