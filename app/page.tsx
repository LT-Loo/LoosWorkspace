// Home Page

export default async function Home() {

  return (
    <div id = "home" className = "container-fluid text-center position-relative">
      <div id = "home-container" className = "px-3 position-absolute start-50 top-50 translate-middle w-100">
        <h1 id = "web-title">Loo&apos;s Workspace</h1>
        <p id = "intro" className = "mb-5 fs-5">
          Hello! This is <b>LOO</b><br/>
          Computer Science graduate<br/>
          Currently studying Interaction Design<br/>
          Aspire to be a professional fullstack developer and interaction designer
        </p>
        <p id = "scope" className = "fs-5 mb-lg-2 mb-md-3">
          Software | API | Web | Mobile Apps | Client-Server | Game | Database
        </p>
        <p id = "scope" className = "fs-5 mb-5">
          Python | JavaScript | C/C++ | PHP | TypeScript | Processing
        </p>

        <div id = "contact-box" className = "row row-cols-auto justify-content-center mx-auto">
          <div id = "contact-info" className = "col mx-lg-3 mx-md-2">
            <a href = "mailto:loo.workspace@gmail.com" className = "email-link-text fs-5 text-nowrap" target="_blank" rel="noopener noreferrer"><i className = "bi bi-envelope"></i> loo.workspace@gmail.com</a>
          </div>
          <div id = "contact-info" className = "col mx-lg-3 mx-md-2">
            <a href = "https://www.linkedin.com/in/lt-loo/" className = "fs-5 text-nowrap" target="_blank" rel="noopener noreferrer"><i className = "bi bi-linkedin"></i> linkedin.com/in/lt-loo/</a>  
          </div>
        </div>
      </div>

      <footer className = "position-absolute bottom-0 start-50 translate-middle-x w-100">
        <p>Background image by upklyak on Freepik<br/>&copy; 2024 Loo&apos;s Workspace</p>
      </footer>
    </div>  
    
  )
}
