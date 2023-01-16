import React from 'react';
import s from './Skills.module.css'
import sc from './../Common/styles/Container.module.css'
import {SkillOnly} from "./Skill/SkillOnly";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className= {` ${sc.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <SkillOnly title={'Красивость'} description={'При его виде мертвые поднимаются, а живые падают. Это просто великолепно'}/>
                    <SkillOnly title={'Сладострастность'} description={'Женщины хотят от него детей, а их дети - еще детей и так до бесконечности'}/>
                    <SkillOnly title={'Прекрасность'} description={'Аналогов просто нет, стоит смириться и восхититься'}/>
                </div>
            </div>
        </div>
    );
};
