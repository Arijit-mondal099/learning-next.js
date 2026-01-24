"use client";

import "./globals.css";

export default function GlobalError() {
  return (
    // we have to return html and body because error boundary replace layout file
    <html lang="en">
      <body>
        <div>
          <h2>Global Error Occurred!</h2>
          <button onClick={() => window.location.reload()}>Try again</button>
        </div>
      </body>
    </html>
  );
}