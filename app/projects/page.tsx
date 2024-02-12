// Project Page

import {promises as fs} from 'fs';
import Image from 'next/image';

export default async function About() {
  const file = await fs.readFile(process.cwd() + "/app/projects.json", "utf8");
  const projects = JSON.parse(file);

  return (
    <div id = "project-container" className = "container h-100">
        <div className = "row">
            {/* Project Menu */}
            <div className = "col-lg-2 col-md-3 p-0 position-fixed" id = "project-menu" role = "tablist">
                <ul className = "nav nav-pills flex-column text-start">
                    <li className = "nav-item my-2 pe-md-3 pe-lg-0">
                        <a className = "nav-link active py-1 me-0" data-bs-toggle = "tab" href = "#all">All</a>
                    </li>
                    {
                        Object.entries(projects).map(([category, data]:any) => {
                            return (
                                <li key = {category} className = "nav-item my-2 pe-md-3 pe-lg-0">
                                    <a className = "nav-link py-1 me-0" data-bs-toggle = "tab"  href = { "#" + category }>{ data[0].category }</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            {/* Project List */}
            <div className = "col-lg-10 col-md-9 offset-lg-2 offset-md-3">
                <div className = "row">
                    <div className = "tab-content" id = "projects">
                        <div className = "tab-pane fade show active" id = "all" role = "tabpanel" tabIndex = {0}>
                            {
                                Object.values(projects).map((category:any) => {
                                    return (
                                        <div key = {category} className = "p-0 m-0">
                                            <div className = "row px-3 mb-2">
                                                <h2 id = "category-name" className = "my-2 pt-1">{ category[0].category }</h2>
                                            </div>
                                            <div id = "category" className = "row row-cols-lg-2 row-cols-1 mb-3">
                                                {
                                                    Object.values(category).map((project:any) => {
                                                        return (
                                                            <div key = {project} className = "col mb-3 px-3">
                                                                <div className ="card h-100" style = {{ border: `none` }} data-bs-toggle = "modal" data-bs-target = { "#" +  project.link }>
                                                                    <Image src = { project.img } className ="card-img-top image-fluid" width = {100} height = {75} alt = { project.title }/>
                                                                    <div className = "card-body text-center">
                                                                        <h4 className = "card-title mb-2">{ project.title }</h4>
                                                                        <p id = "attribute" className = "card-text d-inline-flex text-secondary mb-1 me-1">{ project.language }</p>
                                                                        {
                                                                            project.hasOwnProperty("framework") &&
                                                                            <p id = "attribute" className = "card-text d-inline-flex text-secondary mb-1 me-1">{ project.framework }</p>
                                                                        }
                                                                        {
                                                                            project.hasOwnProperty("database") &&
                                                                            <p id = "attribute" className = "card-text d-inline-flex text-secondary mb-1 me-1">{ project.database }</p>
                                                                        }
                                                                        {
                                                                            project.hasOwnProperty("algorithm") &&
                                                                                project.algorithm.map((alg:any) => {
                                                                                    return (
                                                                                        <p key = {alg} id = "attribute" className = "card-text d-inline-flex text-secondary mb-1 me-1">{ alg }</p>
                                                                                    )
                                                                                })
                                                                        }
                                                                        <p id = "description" className = "card-text mt-2 mb-1 fs-6">{ project.description }</p>    
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        
                                    )
                                })
                            }
                        </div>

                        {
                            Object.entries(projects).map(([key, category]:any) => {
                                return (
                                    <div key = {key} className = "tab-pane fade" id = { key } role = "tabpanel" tabIndex = {0}>
                                        <div className = "row px-3 mb-2">
                                                <h2 id = "category-name" className = "my-2 pt-1">{ category[0].category }</h2>
                                            </div>
                                        <div id = "category" className = "row row-cols-lg-2 row-cols-1 mb-3">
                                            {
                                                Object.values(category).map((project:any) => {
                                                    return (
                                                        <div key = {project} className = "col mb-3 px-3">
                                                            <div className ="card h-100" style = {{ border: `none` }} data-bs-toggle = "modal" data-bs-target = { "#" +  project.link }>
                                                                <Image src = { project.img } className ="card-img-top image-fluid" width = {100} height = {75} alt = { project.title } />
                                                                <div className = "card-body text-center">
                                                                    <h4 className = "card-title mb-2">{ project.title }</h4>
                                                                    <p id = "attribute" className = "card-text d-inline-flex text-secondary mb-1 me-1">{ project.language }</p>
                                                                    {
                                                                        project.hasOwnProperty("framework") && 
                                                                        <p id = "attribute" className = "card-text d-inline-flex text-secondary mb-1 me-1">{ project.framework }</p>
                                                                    }
                                                                    {
                                                                        project.hasOwnProperty("database") &&
                                                                        <p id = "attribute" className = "card-text d-inline-flex text-secondary mb-1 me-1">{ project.database }</p>
                                                                    }
                                                                    {
                                                                        project.hasOwnProperty("algorithm") &&
                                                                            project.algorithm.map((alg:any) => {
                                                                                return (
                                                                                    <p key = {alg} id = "attribute" className = "card-text d-inline-flex text-secondary mb-1 me-1">{ alg }</p>
                                                                                )
                                                                            })
                                                                    }
                                                                    <p id = "description" className = "card-text mt-2 mb-1 fs-6">{ project.description }</p>    
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>    
            </div>
        </div>

        {
            // Modal to present project details
            Object.values(projects).map((category:any) => {
                return Object.values(category).map((project:any) => {
                    return (
                        <div key = {project} className = "modal fade" id = { project.link }>
                            <div className = "modal-dialog modal-fullscreen">
                                <div className = "modal-content">
                                    <div className = "modal-header text-center position-relative mt-3" style = {{ border: `none` }}>
                                        <h1 id = "project-title" className = "modal-title fw-5 fs-2 w-100">{ project.title }</h1>
                                        <button type = "button" id = "back-btn" className = "btn position-absolute end-0 top-50 translate-middle-y pe-md-4 pe-lg-5" data-bs-dismiss = "modal">CLOSE</button>
                                    </div>
                                    <div className = "modal-body">
                                        {
                                            project.link == "lifestyle" &&
                                            <div className = "row h-100 m-auto">
                                                <div className = "col-lg-4 h-100">
                                                    <div className = "media h-100">
                                                        <div className = "media-body h-100">
                                                            <iframe className = "pb-3" src = { project.video } allowFullScreen sandbox = ""></iframe>    
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className = "col-lg h-100">
                                                    <iframe className = "pb-3 h-100 w-100" src = { project.file }></iframe>    
                                                </div>
                                            </div>
                                        }
                                        {
                                            project.hasOwnProperty("details") &&
                                            <div id = { "project-details-" + project.link } className = "row carousel slide carousel-fade justify-content-center">
                                                {
                                                    project.details.length > 1 &&
                                                    <div className = "col-1 position-relative">
                                                        <button id = "prev-control" className = "carousel-control" type = "button" data-bs-target = { "#project-details-" + project.link }  data-bs-slide = "prev">
                                                            <span className = "carousel-control-prev-icon"></span>
                                                        </button>
                                                    </div>
                                                }
                                                <div className = "col-10 col-lg-7 h-100 p-0">
                                                    <div className = "carousel-inner h-100">
                                                        {
                                                            project.details.map((data:any) => {
                                                                return (
                                                                    <div key = {data} className = {project.details.indexOf(data) == 0 ? "carousel-item h-100 active" : "carousel-item h-100"}>
                                                                        {
                                                                            data.hasOwnProperty("img") && 
                                                                            <div id = "project-img">
                                                                                <Image src = { data.img } className = "d-block w-100 h-100" width = {100} height = {100} alt = { project.title }/> 
                                                                            </div>
                                                                        }
                                                                        {
                                                                            data.hasOwnProperty("vid") &&
                                                                            <div id = "project-img" className = "media">
                                                                                <div className = "media-body h-100 position-relative">
                                                                                    <iframe className = "position-absolute top-50 start-50 translate-middle" src = { data.vid } allowFullScreen sandbox = ""></iframe>    
                                                                                </div>
                                                                            </div>
                                                                        }
                                                                        <div id = "project-desc" className = "mt-3 p-3">
                                                                            {
                                                                                data.hasOwnProperty("title") &&
                                                                                <h5 id = "desc-title">{ data.title }</h5>
                                                                            }
                                                                            {
                                                                                data.hasOwnProperty("desc") &&
                                                                                <p id = "desc-data" dangerouslySetInnerHTML = {{ __html: data.desc }}></p>
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                )

                                                            })
                                                        }
                                                    </div>
                                                </div>
                                                {
                                                    project.details.length > 1 &&
                                                    <div className = "col-1 position-relative">
                                                        <button id = "next-control" className = "carousel-control" type = "button" data-bs-target = { "#project-details-" + project.link }  data-bs-slide = "next">
                                                            <span className = "carousel-control-next-icon"></span>
                                                        </button>
                                                    </div>
                                                }
                                            </div>   
                                        }
                                        {
                                            project.hasOwnProperty("file") &&
                                            <div className = "container m-auto h-100">
                                                <iframe className = "pb-3 h-100 w-100" src = { project.file }></iframe>    
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            })
        }
    </div>  
  )
}
