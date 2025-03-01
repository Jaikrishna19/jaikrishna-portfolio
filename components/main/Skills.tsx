import React from 'react';
import SkillDataProvider from '../sub/SkillDataProvider';
import SkillText from '../sub/SkillText';
import { Skill_data } from '@/constants';

const Skills = () => {
    return (
        <section
            id='skills'
            className='skills-section flex flex-col items-center justify-center gap-3 h-full relative overflow overflow-hidden pb-80 py-20'
        >
            <SkillText />
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Skill_data.map((image, index) => (
                    <SkillDataProvider
                        key={index}
                        src={`/jaikrishna-portfolio/images/${image.Image}`}
                        width={image.width}
                        height={image.height}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
}

export default Skills;