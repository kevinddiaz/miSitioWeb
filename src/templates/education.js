import React from 'react';
import { graphql,Link  } from 'gatsby';
import EdNav from '../components/education-nav';

export default (props) => {
    const pageData = props.data.educationJson;
    return (
        <div>
             <header className="border-purple-500 border-solid border-t-8"></header>
            <div className="max-w-4xl mx-auto">
                <header className="py-12 px-12 ">
                    <div className="max-w-4xl mx-auto"></div>
                    <Link to="/" className="uppercase underline text-pink-500">Regresar al Inicio</Link>
                    <h2 className="capitalize text-6xl font-bold">{pageData.title}</h2>
                    <p className="text-xl">{pageData.description}</p>

                </header>
                <ul>
                    {
                        pageData.item.map((item, index) => (
                            <li className="bg-white shadow mt-4 flex px-12" key={index}>
                                <p className="vertical-text">{pageData.slug}</p>
                                <div className="flex item-center flex-1 p-8">
                                    <div className="flex-1">
                                        <h3>{item.name}</h3>
                                        {
                                            item.degree && <pan className="inline-block p-2 radius bg-purple-100 text-purple-700">{item.degree}</pan>
                                        }
                                        {
                                            item.url && <a href={item.url} className="bg-purple-500 text-white font-white  rounded  border-purple-700 py-2 px-4 border-b-4 mt-4 inline-block" target="__blank" rel="noopener noreferrer"> Ver más</a>
                                        }
                                    </div>
                                    <div className="inline-block">
                                        <span className="inline-block p-2 text-2xl bg-green-100 text-green-700">{item.score}</span>
                                    </div>
                                </div>
                            </li>
                        ))
                    }

                </ul>
                <EdNav />
            </div>
        </div>
    )

}

export const query = graphql`
    query($slug :String){
        educationJson( slug: {eq: $slug}){
            title
            description
            slug
            item{
                name
                degree
                score
                url
            }
          }
    }

`;