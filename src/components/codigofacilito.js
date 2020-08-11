import React from 'react';
import { useStaticQuery, graphql } from "gatsby";




export default () => {
    const data = useStaticQuery(graphql`{
        codigofacilitoJson {
          id
          data {
            email
            username
            courses {
              title
              progress
            }
          }
        }
      }`); //hook
    return (
        <section>
            <div className="mt-24">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center">Mis Cursos Online en Codigo Facilito</h2>
                    <div className="flex mt-8">
                        {
                            data.codigofacilitoJson.data.courses.map(courses => (
                                <div className="shawdow p-8 bg-gray mr-4 rounded">
                                    <h4 className="font-bold text-center">
                                        <a href={courses.url} target="__blank">{courses.title}</a>
                                    
                                    </h4>
                                    <div className="text-center">
                                        <span className="inline-block bg-purple-200 text-purple-700 p-2 mt-2 radius">Progreso: {parseInt(courses.progress)}%</span>
                                    </div>
                                </div>

                            ))


                        }

                    </div>

                </div>

            </div>
        </section>

    );

};