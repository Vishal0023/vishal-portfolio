'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';
const technologies = [
 ['HTML','Structure & accessibility','Semantic foundations for clear, accessible web experiences.','</>','#ef9778'],
 ['CSS','Style & motion','Responsive layouts, glass effects, and thoughtful visual details.','{ }','#91bbff'],
 ['JavaScript','Interaction & logic','Dynamic interfaces and the logic behind modern applications.','JS','#ead27e'],
 ['React','Component-driven UI','Reusable components that keep interfaces consistent and maintainable.','⚛','#8ed5e8'],
 ['Next.js','Full-stack experiences','Connecting polished interfaces with server-side application logic.','N','#ddd4f0'],
 ['Java','Backend foundations','Structured application logic with Java and Spring Boot.','J','#e8ac82'],
 ['PostgreSQL','Relational data','Organized data models backed by a robust relational database.','SQL','#90b8dc'],
 ['LangChain','AI orchestration','Connecting language models, retrieval, and useful application workflows.','✳','#bda0ed'],
];
export default function TechCarousel(){
 const track=useRef<HTMLDivElement>(null); const [index,setIndex]=useState(0); const [paused,setPaused]=useState(false); const [hover,setHover]=useState(false); const reduce=useReducedMotion();
 function go(next:number){const el=track.current;if(!el)return;const n=(next+technologies.length)%technologies.length;const card=el.children[n] as HTMLElement;el.scrollTo({left:card.offsetLeft-el.offsetLeft,behavior:reduce?'instant':'smooth'});}
 useEffect(()=>{if(paused||hover||reduce)return;const timer=setInterval(()=>go(index+1),3500);return()=>clearInterval(timer);},[index,paused,hover,reduce]);
 return <section className="container section tech-section" aria-label="Technology carousel"><motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="section-heading"><div><div className="section-kicker">THE BUILDING BLOCKS</div><h2>Many languages.<br/><span className="serif">One creative mindset.</span></h2></div><div className="carousel-controls"><button aria-label="Previous technology" onClick={()=>go(index-1)}><ArrowLeft size={17}/></button><button aria-label={paused?'Play carousel':'Pause carousel'} onClick={()=>setPaused(!paused)}>{paused?<Play size={16}/>:<Pause size={16}/>}</button><button aria-label="Next technology" onClick={()=>go(index+1)}><ArrowRight size={17}/></button></div></motion.div><div ref={track} className="tech-track" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} onFocusCapture={()=>setHover(true)} onBlurCapture={e=>{if(!e.currentTarget.contains(e.relatedTarget))setHover(false)}} onScroll={()=>{const el=track.current;if(!el)return;const width=(el.children[0] as HTMLElement).offsetWidth+18;setIndex(Math.round(el.scrollLeft/width));}}>{technologies.map(([name,category,desc,symbol,color],i)=><article key={name} className="tech-card glass" style={{'--tech-color':color} as React.CSSProperties}><div className="tech-card-top"><span className="tech-symbol">{symbol}</span><span>0{i+1}</span></div><div className="tech-category">{category}</div><h3>{name}</h3><p>{desc}</p><span className="tech-rule"/></article>)}</div><div className="carousel-bottom"><span>EXPLORE MY STACK</span><div className="carousel-dots">{technologies.map(([name],i)=><button key={name} aria-label={'Show '+name} aria-current={index===i?'true':undefined} className={index===i?'active':''} onClick={()=>go(i)}/>)}</div><span>DRAG OR SWIPE →</span></div></section>
}
