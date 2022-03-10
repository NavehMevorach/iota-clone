import { useInView } from 'react-intersection-observer'
import Section from '../../layout/Section'
import BlogPost from './../../components/BlogPost.js'

const data = [
  {
    title: 'Engineering',
    text: 'Learn about cutting edge technologies and products',
    link: '',
    img: 'blog-1',
  },
  {
    title: 'Market Adoption',
    text: 'Explore the eciting and novel use cases enables by IOTA',
    link: '',
    img: 'blog-2',
  },
  {
    title: 'Social Policy',
    text: 'Learn about how are we tackling sociel challanges and informing global policy',
    link: '',
    img: 'blog-3',
  },
  {
    title: 'Research',
    text: 'Discover more about our world-class team and thier research',
    link: '',
    img: 'blog-4',
  },
  {
    title: 'PR & Communication',
    text: 'The PR and Comms departments work with media and beyond',
    link: '',
    img: 'blog-4',
  },
  {
    title: 'IOTA Foundation',
    text: 'Learn about the deep expertise that drives the IOTA foundation',
    link: '',
    img: 'blog-1',
  },
]

function Blog() {
  const [ref, inView, entry] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })
  return (
    <Section id="blog">
      <div className="h-full w-full bg-[#F6F8FC] flex flex-col justify-center items-center py-20">
        <div className="mb-10">
          <h3 className="uppercase text-green">blog</h3>
          <h2>Read our recent article</h2>
        </div>
        <div
          ref={ref}
          className={`${
            inView ? 'fadeInBottom' : 'element-from-blur'
          } grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-8 gap-0 md:px-0 px-4`}>
          {data.map((info, ind) => (
            <BlogPost key={ind + info.title} {...info} />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Blog
