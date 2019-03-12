

import Head from 'next/head'
import Home from '../comps/Home'
import About from '../comps/About'
import Header from '../comps/Header';
import Link from 'next/link'
import Skills from '../comps/Skills'
import Contact from '../comps/Contact'
import WorkExperience from '../comps/WorkExperience'





const Index = () => (

  <div>
    <Head>
      <meta
        name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      ></meta>
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      body { 
        background: #fff;
        font: 16px menlo;
        color: #fff;
      }
    `}</style>

    <div id='Home'>
      <Home />
    </div>
    <div id='Skills'>
      <Skills />
    </div>
    <div id='WorkExperience'>
      <WorkExperience />
    </div>
    

    <div id='Contact'>
      <Contact />
    </div>

    <div id='About'>
      <About />
    </div>



  </div>


)

export default Index