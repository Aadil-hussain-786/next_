import Image from "next/image";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 2,
    title: "",
    description: "",
    className: "font-play text-black lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "w_bg.PNG",
    spareImg: "",
  },

  {
    id: 5,
    title: "Currently building a Adversarial Rubustness & Security Model",
    description: "The Inside Scoop",
    className: "font-play md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    spareImg: "/adversarial.PNG",
  },
  {
  id: 4,
  title: "",
  description: "",
  className: "font-play lg:col-span-2 md:col-span-3 md:row-span-1",
  imgClassName: "",
  titleClassName: "justify-center md:max-w-full max-w-60 text-center",
  img: "neural.jpg",
  spareImg: "",
},
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "font-play lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Interception Tool",
    des: "A CyberSecurity tool for captures and analyze network traffic, aiding in panetration testing",
    img: "/cy.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/https://github.com/Aadil-hussain-786/Intercept-tool",
  },
  {
    id: 2,
    title: "Deep Learning Chatbot",
    des: "Chatbot using Tensorflow and Keras API",
    img: "/cb.png",
    iconLists: ["/tf.png", "/keras.png", "colab.jfif"],
    link: "/Coming Soon",
  },
  
];

export const testimonials = [
  {
    quote:
      "Working with Aadil was a fantastic experience. His professionalism, quick responses, and commitment to achieving outstanding results were clear throughout our project. Aadil's passion for every aspect of development really shines through. If you're looking to enhance your website and boost your brand, Aadil is the perfect partner.",
    name: "Jay",
    title: "",
  },
  {
    quote:
      "Working with Aadil has been a truly inspiring experience! Their deep knowledge in AI development and dedication to exploring new possibilities set them apart in the industry. Whether it's addressing intricate model architectures, fine-tuning algorithms, or deploying state-of-the-art solutions, Aadil brings a wealth of technical expertise and a collaborative attitude to every project. Their knack for turning concepts into effective, impactful AI solutions is remarkable, and any team would be fortunate to have such a committed and creative developer on board!",
    name: "Harsh",
    title: "Researcher",
  
  },
  {
    quote:
      "Aadil is an exceptional backend developer specializing in Flask, known for their unmatched expertise and efficiency in server-side development. They create strong, scalable architectures and produce clean, maintainable code that guarantees applications operate smoothly and securely.",
    name: "Manish",
    title: "",
  },
  
];

export const companies = [
  {
    id: 1,
    name: "Tensorflow",
    img: "/tf.png",
    nameImg: "/tf_name'.PNG",
  },
  {
    id: 2,
    name: "Keras",
    img: "/keras.png",
    nameImg: "/keras_name.PNG",
  },

  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using HTML, CSS ,, enhancing interactivity.",
    className: "text-black md:col-span-2",
    thumbnail: "/ss.png",
  },
  {
    id: 2,
    title: "Machine Learning Intern",
    desc: "As an ML intern, I gained hands-on experience developing and deploying machine learning models in a collaborative, fast-paced environment",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/ml.png",
  },
  {
    id: 3,
    title: "Deep Learning Researcher ",
    desc: "As a researcher focused on adversarial robustness and security in neural networks, my work delves into building models resilient to adversarial attacks and ensuring their safe deployment in sensitive applications. This research combines theoretical understanding with practical experimentation, involving the creation and analysis of adversarial examples, designing countermeasures, and developing frameworks for robustness evaluation. I employ a range of techniques, including adversarial training, regularization methods, and robustness testing, with the goal of improving the security and reliability of AI models in high-stakes environments. This work requires continuous learning, experimentation, and cross-disciplinary insight into cybersecurity and AI ethics, aiming to make AI models safer and more trustworthy.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/ss2.png",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/images.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
