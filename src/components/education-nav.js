import React from 'react';
import { useStaticQuery,Link,graphql } from 'gatsby';




export default (props) => {
    const data = useStaticQuery(graphql`
        {
            allEducationJson{
                edges{
                    node{
                        slug
                        title
                        description
                    }
                }
            }
        }
        `);
    return (
        <div className="max-w-4xl mx-auto mt-20">
            <h2 className="text-3xl font-bold text-center">Conoce sobre mi información educativa</h2>
            <nav className="flex justify-center mt-8">  {
                data.allEducationJson.edges.map((element, index) => {
                    const { node } = element;
                    return (
                        <article className="flex-1 bg-white shadow-md m-4 max-w-sm p-4">
                            <header>
                                <p className="font-bold leading-loose">{node.title}</p>
                                <div className="mt-8">
                                    <p className="font-light">{node.description}</p>
                                    <Link to={`/${node.slug}`} className="bg-purple-500 text-white font-white  rounded  border-purple-700 py-2 px-4 border-b-4 inline-block mt-4">Ir</Link>
                                
                                </div>


                            </header>
                        </article>
                    );
                })
            }</nav>

        </div>

    );

}