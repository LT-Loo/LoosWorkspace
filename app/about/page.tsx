// About Me Page

import {promises as fs} from 'fs';

export default async function About() {
  const file = await fs.readFile(process.cwd() + "/app/projects.json", "utf8");
  const lpt = JSON.parse(file).apiDatabase[0];

  return (
    <div id = "about-me" className = "container">
        <div id = "about-me-container" className = "container pt-3 pb-3">
            {/* Educational Background */}
            <div id = "row-table" className = "row">
                <table className = "table table-borderless">
                    <tr id = "subtitle-row">
                        <td></td>
                        <td className = "mb-0 pb-0">
                            <p id = "subtitle" className = "bg-transparent fs-3 pb-0 mb-0">Educational Background</p>
                        </td>
                    </tr>
                    <tr>
                        <td id = "period" className = "align-top"><p className = "pt-2"><b>Aug 2023 - Present</b></p></td>
                        <td id = "details">
                            <p className = "pt-2"><b>Master of Interaction Design</b><br/>
                            University of Technology Sydney, NSW</p>
                        </td>
                    </tr>
                    <tr>
                        <td id = "period" className = "align-top"><p className = "pt-2"><b>Feb 2020 - Dec 2022</b></p></td>
                        <td id = "details">
                            <p className = "pt-2"><b>Bachelor of Computer Science</b><br/>
                            Griffith University, Gold Coast, QLD<br/>
                            Major: Software Development<br/>
                            CGPA: 6.58<br/>
                            Achievements: Griffith Award for Academic Excellence 2020-2022</p>
                        </td>
                    </tr>
                </table>
            </div>

            {/* Work Experience */}
            <div id = "row-table" className = "row">
                <table className = "table mb-0">
                    <tr id = "subtitle-row">
                        <td></td>
                        <td className = "mb-0 pb-0">
                            <p id = "subtitle" className = "bg-transparent fs-3 pb-0 mb-0">Work Experience</p>
                        </td>
                    </tr>
                    <tr>
                        <td id = "period" className = "align-top"><p className = "pt-2"><b>Mac - Jun 2022</b></p></td>
                        <td id = "details">
                            <p className = "py-2"><b>Internship - API Development & Database Management</b><br/>
                            SecureStack, Gold Coast, QLD</p>
                            <p className = "pt-2"><b>Project Title: Light Pentesting Tool</b></p>
                            <p className = "mb-1 lh-sm">Developed a software application that aims to { lpt.description }.</p>
                            <ul className = "ps-4 mb-0">
                                <li><b>FastAPI</b> development for transferring data and triggering scan operations</li>
                                <li><b>PostgreSQL</b> database development and management</li>
                                <li>Application containerisation via <b>Docker</b></li>
                            </ul>
                            <button id = "view-project" className = "py-0 px-3 mb-1 ms-2 mt-2 text-center" type = "button" data-bs-toggle = "modal" data-bs-target = { "#" + lpt.link }>
                                View project &#9654;
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>

        {/* Modal to display Light Pentesting Tool Project details */}
        <div className = "modal fade" id = { lpt.link } tabIndex = {-1}>
            <div className = "modal-dialog modal-fullscreen modal-dialog-centered">
                <div className = "modal-content">
                    <div className = "modal-header text-center position-relative" style = {{ border: `none` }}>
                        <h1 id = "project-title" className = "fw-5 fs-2 mt-3 w-100">{ lpt.title }</h1>
                        <button type = "button" id = "back-btn" className = "btn position-absolute end-0 top-50 translate-middle-y pe-4 pt-3" data-bs-dismiss = "modal">CLOSE</button>
                    </div>
                    <div className = "modal-body">
                        <div className = "container m-auto h-100 px-0 pt-0 pb-3">
                            <iframe className = "h-100 w-100" src = { lpt.file }></iframe>    
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    </div>  
  )
}
