import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Project = () => {
    return (
        <div className='flex flex-col items-center justify-center py-20'>
            <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
                My Projects
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard
                    src='/SpaceWebsite.png'
                    title='Jaikrishna Portfolio'
                    description='This is my portfolio website where I showcase my skills and projects'
                />
                <ProjectCard
                    src='/NextWebsite.png'
                    title='Website'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                />
                <ProjectCard
                    src='/CardImage.png'
                    title='Website'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                />

            </div>
        </div>
    )
}

export default Project