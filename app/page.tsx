// Home Page

import localFont from '@next/font/local';

const zapfino = localFont({
  src: '../public/fonts/Zapfino.ttf',
  variable: '--font-zapfino'
});

export default async function Home() {

  return (
    <div id = "home" className = "container-fluid text-center position-relative">
      <div className = "position-absolute start-50 top-50 translate-middle w-100">
        <h1 id = "web-title" className = {`${zapfino.variable}`}>Loo&apos;s Workspace</h1>
        <p id = "intro" className = "mb-4 fs-5">
          Hello! This is <b>LOO</b><br/>
          Computer Science graduate<br/>
          Currently studying Interaction Design<br/>
          Aspire to be a professional fullstack developer and interaction designer
        </p>
        <p id = "scope" className = "fs-5">
          Software | API | Web | Mobile Apps | Client-Server | Game | Database
        </p>
        <h5 className = "mt-4 fs-4"><i>Open for freelance projects</i></h5>
        <br/>
        <p id = "contact-info">
          <a href = "mailto:loo.workspace@gmail.com" className = "email-link-text fs-5" target="_blank" rel="noopener noreferrer"><i className = "bi bi-envelope"></i> loo.workspace@gmail.com</a>&emsp;&emsp;
          <a href = "https://www.linkedin.com/in/lt-loo/" className = "fs-5" target="_blank" rel="noopener noreferrer"><i className = "bi bi-linkedin"></i> linkedin.com/in/lt-loo/</a>
        </p>
      </div>

      <footer className = "fs-6 position-absolute bottom-0 start-50 translate-middle-x">
        <p>Background image by upklyak on Freepik<br/>&copy 2024 Loo&apos;s Workspace</p>
      </footer>
    </div>  
    
  )
}
