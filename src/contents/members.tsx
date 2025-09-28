
import React from 'react';
import './members.css';

export function Members() {
  const [selectedMember, setSelectedMember] = React.useState<string | null>(null);
  const [showDetails, setShowDetails] = React.useState(false);
  const [showOverlay, setShowOverlay] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const membersRef = React.useRef<HTMLDivElement>(null);
  const memberRefs = React.useRef<{[key: string]: HTMLDivElement | null}>({});

  const calculatePosition = (name: string) => {
    if (!membersRef.current || !memberRefs.current[name]) return;
    
    const membersRect = membersRef.current.getBoundingClientRect();
    const memberRect = memberRefs.current[name].getBoundingClientRect();
    
    // 计算x轴居中所需的偏移量
    const centerX = membersRect.width / 2;
    const memberCenterX = memberRect.left - membersRect.left + memberRect.width / 2;
    const offsetX = centerX - memberCenterX;
    
    // 计算y轴居中所需的偏移量
    const centerY = window.innerHeight / 2;
    const memberCenterY = memberRect.top + memberRect.height / 2;
    const offsetY = centerY - memberCenterY - 250;
    
    setPosition({ x: offsetX, y: offsetY });
  };
  
  // 添加窗口滚动事件监听器
  React.useEffect(() => {
    const handleScroll = () => {
      if (selectedMember) {
        calculatePosition(selectedMember);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [selectedMember]);

  const handleMemberClick = (name: string) => {
    if(showDetails){
      handleClose();
    }else{
      setSelectedMember(name);
      calculatePosition(name);
      setShowOverlay(true);
      setShowDetails(true);
    }
  };

  const handleClose = () => {
    setShowDetails(false);
    setTimeout(() => {
      setSelectedMember(null);
      setPosition({ x: 0, y: 0 });
      setShowOverlay(false);
    }, 500); // 延迟清除选中状态和遮罩，等待动画完成
  };

  return (
    <div className='members' ref={membersRef}>
      <h1 className="text-center text-4xl font-bold text-[#7030A0] mb-10">Supervisor</h1>
      <div className="flex justify-center gap-10 mb-20">
        <div 
          ref={el => memberRefs.current["Jian Mo"] = el}
          style={{
            transform: selectedMember === "Jian Mo" && showDetails 
              ? `translate(${position.x}px, ${position.y}px)` 
              : 'translate(0, 0)',
            transition: 'transform 500ms ease-in-out'
          }}
          className={`${selectedMember === "Jian Mo" && showOverlay ? 'z-10' : ''}`}
        >
          <img 
            src="members/1.png" 
            className={`
              w-[180px] h-[180px] border-[6px] border-[#4874CB] rounded-full 
              transition-all duration-300 ease-in-out cursor-pointer
              ${selectedMember === "Jian Mo" && showDetails ? 
                "scale-180" : 
                "hover:scale-110"}
            `}
            onClick={() => handleMemberClick("Jian Mo")}
          />
          <p className={`text-center mt-3 w-[180px] text-[#7030A0] text-2xl font-bold ${selectedMember === "Jian Mo" && showOverlay ? 'invisible' : ''}`}>Jian Mo</p>
          <div className={`introduction text-xl ${selectedMember === "Jian Mo" && showDetails ? 'show' : ''}`}>
            <p>Jian Mo, specializes in the biosynthesis of natural products, exploring how complex molecules are synthesized biologically. 
            His personal motto is: "Engineering life to synthesize the future".</p>
          </div>
        </div>
      </div>

      <h1 className="text-center text-4xl font-bold text-[#7030A0] mb-10">Team Leader</h1>
      <div className="flex justify-center gap-10 mb-20">
        <div 
          ref={el => memberRefs.current["Yijia Huang"] = el}
          style={{
            transform: selectedMember === "Yijia Huang" && showDetails 
              ? `translate(${position.x}px, ${position.y}px)` 
              : 'translate(0, 0)',
            transition: 'transform 500ms ease-in-out'
          }}
          className={`${selectedMember === "Yijia Huang" && showOverlay ? 'z-10' : ''}`}
        >
          <img 
            src="members/2.png" 
            className={`
              w-[180px] h-[180px] border-[6px] border-[#4874CB] rounded-full 
              transition-all duration-300 ease-in-out cursor-pointer
              ${selectedMember === "Yijia Huang" && showDetails ? 
                "scale-180" : 
                "hover:scale-110"}
            `}
            onClick={() => handleMemberClick("Yijia Huang")}
          />
          <p className={`text-center mt-3 w-[180px] text-[#7030A0] text-2xl font-bold ${selectedMember === "Yijia Huang" && showOverlay ? 'invisible' : ''}`}>Yijia Huang</p>
          <div className={`introduction text-xl ${selectedMember === "Yijia Huang" && showDetails ? 'show' : ''}`}>
            <p>Hello, I'm Yijia Huang. Although this is my first time participating in iDEC, I have always been deeply passionate about the field of Biology. I am excited to contribute, learn, and collaborate throughout this competition, and I look forward to a rewarding and enjoyable experience with the team.</p>
          </div>
        </div>

        <div 
          ref={el => memberRefs.current["Yuesi Xu"] = el}
          style={{
            transform: selectedMember === "Yuesi Xu" && showDetails 
              ? `translate(${position.x}px, ${position.y}px)` 
              : 'translate(0, 0)',
            transition: 'transform 500ms ease-in-out'
          }}
          className={`${selectedMember === "Yuesi Xu" && showOverlay ? 'z-10' : ''}`}
        >
          <img 
            src="members/3.png" 
            className={`
              w-[180px] h-[180px] border-[6px] border-[#4874CB] rounded-full 
              transition-all duration-300 ease-in-out cursor-pointer
              ${selectedMember === "Yuesi Xu" && showDetails ? 
                "scale-180" : 
                "hover:scale-110"}
            `}
            onClick={() => handleMemberClick("Yuesi Xu")}
          />
          <p className={`text-center mt-3 w-[180px] text-[#7030A0] text-2xl font-bold ${selectedMember === "Yuesi Xu" && showOverlay ? 'invisible' : ''}`}>Yuesi Xu</p>
          <div className={`introduction text-xl ${selectedMember === "Yuesi Xu" && showDetails ? 'show' : ''}`}>
            <p>Hi, I'm Asteria. I am naturally curious and love exploring how things work, which is what drew me to biology and biochemistry—the sciences that reveal the mechanisms of life. I have always admired the dedication of researchers working in labs, and I am thrilled to finally take on our iDEC project. I'm eager to gain hands-on experience and enjoy this journey with my teammates.</p>
          </div>
        </div>

        <div 
          ref={el => memberRefs.current["Benjamin Yang"] = el}
          style={{
            transform: selectedMember === "Benjamin Yang" && showDetails 
              ? `translate(${position.x}px, ${position.y}px)` 
              : 'translate(0, 0)',
            transition: 'transform 500ms ease-in-out'
          }}
          className={`${selectedMember === "Benjamin Yang" && showOverlay ? 'z-10' : ''}`}
        >
          <img 
            src="members/4.png" 
            className={`
              w-[180px] h-[180px] border-[6px] border-[#4874CB] rounded-full 
              transition-all duration-300 ease-in-out cursor-pointer
              ${selectedMember === "Benjamin Yang" && showDetails ? 
                "scale-180" : 
                "hover:scale-110"}
            `}
            onClick={() => handleMemberClick("Benjamin Yang")}
          />
          <p className={`text-center mt-3 w-[180px] text-[#7030A0] text-2xl font-bold ${selectedMember === "Benjamin Yang" && showOverlay ? 'invisible' : ''}`}>Benjamin Yang</p>
          <div className={`introduction text-xl ${selectedMember === "Benjamin Yang" && showDetails ? 'show' : ''}`}>
            <p>Hi, I’m Benjamin Yang. My passion lies in biology, particularly molecular biology and microbiology. At iDEC, I hope to connect with like-minded individuals and deepen my knowledge in these fields beyond my current understanding. In my free time, I enjoy playing guitar and baseball. Though both can be demanding, I love the mental focus and sense of accomplishment.</p>
          </div>
        </div>

        <div 
          ref={el => memberRefs.current["Xinyao Ma"] = el}
          style={{
            transform: selectedMember === "Xinyao Ma" && showDetails 
              ? `translate(${position.x}px, ${position.y}px)` 
              : 'translate(0, 0)',
            transition: 'transform 500ms ease-in-out'
          }}
          className={`${selectedMember === "Xinyao Ma" && showOverlay ? 'z-10' : ''}`}
        >
          <img 
            src="members/5.png" 
            className={`
              w-[180px] h-[180px] border-[6px] border-[#4874CB] rounded-full 
              transition-all duration-300 ease-in-out cursor-pointer
              ${selectedMember === "Xinyao Ma" && showDetails ? 
                "scale-180" : 
                "hover:scale-110"}
            `}
            onClick={() => handleMemberClick("Xinyao Ma")}
          />
          <p className={`text-center mt-3 w-[180px] text-[#7030A0] text-2xl font-bold ${selectedMember === "Xinyao Ma" && showOverlay ? 'invisible' : ''}`}>Xinyao Ma</p>
          <div className={`introduction text-xl ${selectedMember === "Xinyao Ma" && showDetails ? 'show' : ''}`}>
            <p>Hi! My name is Bella and I'm a bioengineering/literature/math/philosophy enthusiast. My hobbies include trail running, mountaineering, swimming, dance, and climbing. I look forward to exploring the potential of bioengineering further through iDEC.</p>
          </div>
        </div>
      </div>

      <h1 className="text-center text-4xl font-bold text-[#7030A0] mb-10">Team Members</h1>
      <div className="flex justify-center gap-10 mb-20">
        <div 
          ref={el => memberRefs.current["Haotian Lu"] = el}
          style={{
            transform: selectedMember === "Haotian Lu" && showDetails 
              ? `translate(${position.x}px, ${position.y}px)` 
              : 'translate(0, 0)',
            transition: 'transform 500ms ease-in-out'
          }}
          className={`${selectedMember === "Haotian Lu" && showOverlay ? 'z-10' : ''}`}
        >
          <img 
            src="members/6.png" 
            className={`
              w-[180px] h-[180px] border-[6px] border-[#4874CB] rounded-full 
              transition-all duration-300 ease-in-out cursor-pointer
              ${selectedMember === "Haotian Lu" && showDetails ? 
                "scale-180" : 
                "hover:scale-110"}
            `}
            onClick={() => handleMemberClick("Haotian Lu")}
          />
          <p className={`text-center mt-3 w-[180px] text-[#7030A0] text-2xl font-bold ${selectedMember === "Haotian Lu" && showOverlay ? 'invisible' : ''}`}>Haotian Lu</p>
          <div className={`introduction text-xl ${selectedMember === "Haotian Lu" && showDetails ? 'show' : ''}`}>
            <p>Hello, my name is Eric Lu. I enjoy writing novels and often read business magazines to explore new ideas and perspectives. In my free time, I like cycling, which helps me stay active and clear my mind.</p>
          </div>
        </div>

        <div 
          ref={el => memberRefs.current["Yufan Dong"] = el}
          style={{
            transform: selectedMember === "Yufan Dong" && showDetails 
              ? `translate(${position.x}px, ${position.y}px)` 
              : 'translate(0, 0)',
            transition: 'transform 500ms ease-in-out'
          }}
          className={`${selectedMember === "Yufan Dong" && showOverlay ? 'z-10' : ''}`}
        >
          <img 
            src="members/7.png" 
            className={`
              w-[180px] h-[180px] border-[6px] border-[#4874CB] rounded-full 
              transition-all duration-300 ease-in-out cursor-pointer
              ${selectedMember === "Yufan Dong" && showDetails ? 
                "scale-180" : 
                "hover:scale-110"}
            `}
            onClick={() => handleMemberClick("Yufan Dong")}
          />
          <p className={`text-center mt-3 w-[180px] text-[#7030A0] text-2xl font-bold ${selectedMember === "Yufan Dong" && showOverlay ? 'invisible' : ''}`}>Yufan Dong</p>
          <div className={`introduction text-xl ${selectedMember === "Yufan Dong" && showDetails ? 'show' : ''}`}>
            <p>I'm Francis, with a strong interest in STEM disciplines because I find them both challenging and captivating. Outside of academics, I enjoy playing soccer and producing music. I see iDEC as a great platform to develop teamwork and express my creativity. I am excited to tackle scientific challenges and grow alongside my teammates throughout this competition.</p>
          </div>
        </div>

        <div 
          ref={el => memberRefs.current["Xiaoman Li"] = el}
          style={{
            transform: selectedMember === "Xiaoman Li" && showDetails 
              ? `translate(${position.x}px, ${position.y}px)` 
              : 'translate(0, 0)',
            transition: 'transform 500ms ease-in-out'
          }}
          className={`${selectedMember === "Xiaoman Li" && showOverlay ? 'z-10' : ''}`}
        >
          <img 
            src="members/8.png" 
            className={`
              w-[180px] h-[180px] border-[6px] border-[#4874CB] rounded-full 
              transition-all duration-300 ease-in-out cursor-pointer
              ${selectedMember === "Xiaoman Li" && showDetails ? 
                "scale-180" : 
                "hover:scale-110"}
            `}
            onClick={() => handleMemberClick("Xiaoman Li")}
          />
          <p className={`text-center mt-3 w-[180px] text-[#7030A0] text-2xl font-bold ${selectedMember === "Xiaoman Li" && showOverlay ? 'invisible' : ''}`}>Xiaoman Li</p>
          <div className={`introduction text-xl ${selectedMember === "Xiaoman Li" && showDetails ? 'show' : ''}`}>
            <p>Hi everyone, I'm Maria. I am an active person and have been training as a semi-professional fencer; I also enjoy badminton and photography. I love capturing meaningful moments through my lens. My personal motto, inspired by Serena Williams, is: "Overpower, overtake, overcome." I am motivated to bring the same determination to our iDEC project.</p>
          </div>
        </div>

        <div 
          ref={el => memberRefs.current["Chengjun Jiang"] = el}
          style={{
            transform: selectedMember === "Chengjun Jiang" && showDetails 
              ? `translate(${position.x}px, ${position.y}px)` 
              : 'translate(0, 0)',
            transition: 'transform 500ms ease-in-out'
          }}
          className={`${selectedMember === "Chengjun Jiang" && showOverlay ? 'z-10' : ''}`}
        >
          <img 
            src="members/9.png" 
            className={`
              w-[180px] h-[180px] border-[6px] border-[#4874CB] rounded-full 
              transition-all duration-300 ease-in-out cursor-pointer
              ${selectedMember === "Chengjun Jiang" && showDetails ? 
                "scale-180" : 
                "hover:scale-110"}
            `}
            onClick={() => handleMemberClick("Chengjun Jiang")}
          />
          <p className={`text-center mt-3 w-[180px] text-[#7030A0] text-2xl font-bold ${selectedMember === "Chengjun Jiang" && showOverlay ? 'invisible' : ''}`}>Chengjun Jiang</p>
          <div className={`introduction text-xl ${selectedMember === "Chengjun Jiang" && showDetails ? 'show' : ''}`}>
            <p>Hello, I'm Chengjun Jiang (Charles). I have broad academic interests and am very excited to join the iDEC team. I look forward to collaborating with everyone and contributing my efforts toward our project. I hope to learn more about synthetic biology and team-based research through this experience.</p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center gap-10 mb-20">
        <div 
          ref={el => memberRefs.current["Xiaohan Sophie Wang"] = el}
          style={{
            transform: selectedMember === "Xiaohan Sophie Wang" && showDetails 
              ? `translate(${position.x}px, ${position.y}px)` 
              : 'translate(0, 0)',
            transition: 'transform 500ms ease-in-out'
          }}
          className={`${selectedMember === "Xiaohan Sophie Wang" && showOverlay ? 'z-10' : ''}`}
        >
          <img 
            src="members/10.png" 
            className={`
              w-[180px] h-[180px] border-[6px] border-[#4874CB] rounded-full 
              transition-all duration-300 ease-in-out cursor-pointer
              ${selectedMember === "Xiaohan Sophie Wang" && showDetails ? 
                "scale-180" : 
                "hover:scale-110"}
            `}
            onClick={() => handleMemberClick("Xiaohan Sophie Wang")}
          />
          <p className={`text-center mt-3 w-[180px] text-[#7030A0] text-2xl font-bold ${selectedMember === "Xiaohan Sophie Wang" && showOverlay ? 'invisible' : ''}`}>Xiaohan Sophie Wang</p>
          <div className={`introduction text-xl ${selectedMember === "Xiaohan Sophie Wang" && showDetails ? 'show' : ''}`}>
            <p>Hi, I'm Sophie. Chemistry has always fascinated me, which is why I'm excited to compete in events where I can improve my lab skills, tackle real scientific challenges, and implement practical solutions. When I'm not in the lab, you'll probably find me practicing the cello. What began as a hobby has taught me patience and attention to detail - skills that prove surprisingly helpful in chemistry as well.</p>
          </div>
        </div>

        <div 
          ref={el => memberRefs.current["Jiayang Wang"] = el}
          style={{
            transform: selectedMember === "Jiayang Wang" && showDetails 
              ? `translate(${position.x}px, ${position.y}px)` 
              : 'translate(0, 0)',
            transition: 'transform 500ms ease-in-out'
          }}
          className={`${selectedMember === "Jiayang Wang" && showOverlay ? 'z-10' : ''}`}
        >
          <img 
            src="members/11.png" 
            className={`
              w-[180px] h-[180px] border-[6px] border-[#4874CB] rounded-full 
              transition-all duration-300 ease-in-out cursor-pointer
              ${selectedMember === "Jiayang Wang" && showDetails ? 
                "scale-180" : 
                "hover:scale-110"}
            `}
            onClick={() => handleMemberClick("Jiayang Wang")}
          />
          <p className={`text-center mt-3 w-[180px] text-[#7030A0] text-2xl font-bold ${selectedMember === "Jiayang Wang" && showOverlay ? 'invisible' : ''}`}>Jiayang Wang</p>
          <div className={`introduction text-xl ${selectedMember === "Jiayang Wang" && showDetails ? 'show' : ''}`}>
            <p>Hi, I'm Jiayang Wang. I have a passion for biology and physics, which led me to participate in the iDEC competition to challenge myself. Our team's project addresses a significant societal issue, and it's thrilling to see our lab results coming together.</p>
          </div>
        </div>

        <div 
          ref={el => memberRefs.current["Youran Li"] = el}
          style={{
            transform: selectedMember === "Youran Li" && showDetails 
              ? `translate(${position.x}px, ${position.y}px)` 
              : 'translate(0, 0)',
            transition: 'transform 500ms ease-in-out'
          }}
          className={`${selectedMember === "Youran Li" && showOverlay ? 'z-10' : ''}`}
        >
          <img 
            src="members/12.png" 
            className={`
              w-[180px] h-[180px] border-[6px] border-[#4874CB] rounded-full 
              transition-all duration-300 ease-in-out cursor-pointer
              ${selectedMember === "Youran Li" && showDetails ? 
                "scale-180" : 
                "hover:scale-110"}
            `}
            onClick={() => handleMemberClick("Youran Li")}
          />
          <p className={`text-center mt-3 w-[180px] text-[#7030A0] text-2xl font-bold ${selectedMember === "Youran Li" && showOverlay ? 'invisible' : ''}`}>Youran Li</p>
          <div className={`introduction text-xl ${selectedMember === "Youran Li" && showDetails ? 'show' : ''}`}>
            <p>I'm Yolanda Li. My interested in Microbiology and Chemistry and I hope to learn more about biology through our Project and team working. In my spare time, I love rock climbing (bouldering), cycling, and musical.</p>
          </div>
        </div>

        <div 
          ref={el => memberRefs.current["Xuyin Dai"] = el}
          style={{
            transform: selectedMember === "Xuyin Dai" && showDetails 
              ? `translate(${position.x}px, ${position.y}px)` 
              : 'translate(0, 0)',
            transition: 'transform 500ms ease-in-out'
          }}
          className={`${selectedMember === "Xuyin Dai" && showOverlay ? 'z-10' : ''}`}
        >
          <img 
            src="members/13.png" 
            className={`
              w-[180px] h-[180px] border-[6px] border-[#4874CB] rounded-full 
              transition-all duration-300 ease-in-out cursor-pointer
              ${selectedMember === "Xuyin Dai" && showDetails ? 
                "scale-180" : 
                "hover:scale-110"}
            `}
            onClick={() => handleMemberClick("Xuyin Dai")}
          />
          <p className={`text-center mt-3 w-[180px] text-[#7030A0] text-2xl font-bold ${selectedMember === "Xuyin Dai" && showOverlay ? 'invisible' : ''}`}>Xuyin Dai</p>
          <div className={`introduction text-xl ${selectedMember === "Xuyin Dai" && showDetails ? 'show' : ''}`}>
            <p>Hello my name is Emily. I am passionate about cell biology and public health, especially research on different diseases. Through iDEC, I hope to deepen my scientific knowledge, collaborate with like-minded peers, and gain hands-on experience in innovative problem-solving. In my free time, I enjoy reading, traveling, drinking coffee, and spending time with friends.</p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center gap-10 mb-20">
        <div 
          ref={el => memberRefs.current["Yican Cai"] = el}
          style={{
            transform: selectedMember === "Yican Cai" && showDetails 
              ? `translate(${position.x}px, ${position.y}px)` 
              : 'translate(0, 0)',
            transition: 'transform 500ms ease-in-out'
          }}
          className={`${selectedMember === "Yican Cai" && showOverlay ? 'z-10' : ''}`}
        >
          <img 
            src="members/14.png" 
            className={`
              w-[180px] h-[180px] border-[6px] border-[#4874CB] rounded-full 
              transition-all duration-300 ease-in-out cursor-pointer
              ${selectedMember === "Yican Cai" && showDetails ? 
                "scale-180" : 
                "hover:scale-110"}
            `}
            onClick={() => handleMemberClick("Yican Cai")}
          />
          <p className={`text-center mt-3 w-[180px] text-[#7030A0] text-2xl font-bold ${selectedMember === "Yican Cai" && showOverlay ? 'invisible' : ''}`}>Yican Cai</p>
          <div className={`introduction text-xl ${selectedMember === "Yican Cai" && showDetails ? 'show' : ''}`}>
            <p>Hi, I'm Ethan Cai. I have a strong interest in biology and genetic modification, and is extremely passionate about mathematics, physics, and chemistry, and has been persistently engaged in these fields. Through iDEC, I hope to better enhance my communication and coordination skills within a team, as well as become proficient in the experimental procedures related to biological modification.</p>
          </div>
        </div>

        <div 
          ref={el => memberRefs.current["Yuyan Huang"] = el}
          style={{
            transform: selectedMember === "Yuyan Huang" && showDetails 
              ? `translate(${position.x}px, ${position.y}px)` 
              : 'translate(0, 0)',
            transition: 'transform 500ms ease-in-out'
          }}
          className={`${selectedMember === "Yuyan Huang" && showOverlay ? 'z-10' : ''}`}
        >
          <img 
            src="members/15.png" 
            className={`
              w-[180px] h-[180px] border-[6px] border-[#4874CB] rounded-full 
              transition-all duration-300 ease-in-out cursor-pointer
              ${selectedMember === "Yuyan Huang" && showDetails ? 
                "scale-180" : 
                "hover:scale-110"}
            `}
            onClick={() => handleMemberClick("Yuyan Huang")}
          />
          <p className={`text-center mt-3 w-[180px] text-[#7030A0] text-2xl font-bold ${selectedMember === "Yuyan Huang" && showOverlay ? 'invisible' : ''}`}>Yuyan Huang</p>
          <div className={`introduction text-xl ${selectedMember === "Yuyan Huang" && showDetails ? 'show' : ''}`}>
            <p>Hello, I'm Doris, an ENFP person. My hobby is Math & Art, and through iDEC looking forward to learn more about biology.</p>
          </div>
        </div>

        <div 
          ref={el => memberRefs.current["Boqing Liu"] = el}
          style={{
            transform: selectedMember === "Boqing Liu" && showDetails 
              ? `translate(${position.x}px, ${position.y}px)` 
              : 'translate(0, 0)',
            transition: 'transform 500ms ease-in-out'
          }}
          className={`${selectedMember === "Boqing Liu" && showOverlay ? 'z-10' : ''}`}
        >
          <img 
            src="members/16.png" 
            className={`
              w-[180px] h-[180px] border-[6px] border-[#4874CB] rounded-full 
              transition-all duration-300 ease-in-out cursor-pointer
              ${selectedMember === "Boqing Liu" && showDetails ? 
                "scale-180" : 
                "hover:scale-110"}
            `}
            onClick={() => handleMemberClick("Boqing Liu")}
          />
          <p className={`text-center mt-3 w-[180px] text-[#7030A0] text-2xl font-bold ${selectedMember === "Boqing Liu" && showOverlay ? 'invisible' : ''}`}>Boqing Liu</p>
          <div className={`introduction text-xl ${selectedMember === "Boqing Liu" && showDetails ? 'show' : ''}`}>
            <p>My name is Zoe, and I'm an INTP. My favourite fields is medicine and biochemistry. I hope to improve my skills and learn more about biology.</p>
          </div>
        </div>

        <div 
          ref={el => memberRefs.current["Yishun Pei"] = el}
          style={{
            transform: selectedMember === "Yishun Pei" && showDetails 
              ? `translate(${position.x}px, ${position.y}px)` 
              : 'translate(0, 0)',
            transition: 'transform 500ms ease-in-out'
          }}
          className={`${selectedMember === "Yishun Pei" && showOverlay ? 'z-10' : ''}`}
        >
          <img 
            src="members/17.png" 
            className={`
              w-[180px] h-[180px] border-[6px] border-[#4874CB] rounded-full 
              transition-all duration-300 ease-in-out cursor-pointer
              ${selectedMember === "Yishun Pei" && showDetails ? 
                "scale-180" : 
                "hover:scale-110"}
            `}
            onClick={() => handleMemberClick("Yishun Pei")}
          />
          <p className={`text-center mt-3 w-[180px] text-[#7030A0] text-2xl font-bold ${selectedMember === "Yishun Pei" && showOverlay ? 'invisible' : ''}`}>Yishun Pei</p>
          <div className={`introduction text-xl ${selectedMember === "Yishun Pei" && showDetails ? 'show' : ''}`}>
            <p>Hello! My name is Walter and I'm an ENFJ person. In my leisure time, I am passionate about badminton, tennis, archery and traveling. In terms of academic study, I have a strong interest in neuroscience, biochemistry engineering and analytical chemistry.</p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center gap-10 mb-20">
        <div 
          ref={el => memberRefs.current["Yueyang Xia"] = el}
          style={{
            transform: selectedMember === "Yueyang Xia" && showDetails 
              ? `translate(${position.x}px, ${position.y}px)` 
              : 'translate(0, 0)',
            transition: 'transform 500ms ease-in-out'
          }}
          className={`${selectedMember === "Yueyang Xia" && showOverlay ? 'z-10' : ''}`}
        >
          <img 
            src="members/18.png" 
            className={`
              w-[180px] h-[180px] border-[6px] border-[#4874CB] rounded-full 
              transition-all duration-300 ease-in-out cursor-pointer
              ${selectedMember === "Yueyang Xia" && showDetails ? 
                "scale-180" : 
                "hover:scale-110"}
            `}
            onClick={() => handleMemberClick("Yueyang Xia")}
          />
          <p className={`text-center mt-3 w-[180px] text-[#7030A0] text-2xl font-bold ${selectedMember === "Yueyang Xia" && showOverlay ? 'invisible' : ''}`}>Yueyang Xia</p>
          <div className={`introduction text-xl ${selectedMember === "Yueyang Xia" && showDetails ? 'show' : ''}`}>
            <p>Good day, everyone. My name is Jerry Xia, and I'm excited to participate in this event. I'm passionate about economics and chemistry, and I hope to specialize in materials science, where these fields intersect to drive innovation. Outside academics, I enjoy basketball, golf, and gaming—activities that teach me teamwork and strategy. I'm eager to learn from all of you. Thank you, and I look forward to great discussions!</p>
          </div>
        </div>

        <div 
          ref={el => memberRefs.current["Zimeng Jessie Yu"] = el}
          style={{
            transform: selectedMember === "Zimeng Jessie Yu" && showDetails 
              ? `translate(${position.x}px, ${position.y}px)` 
              : 'translate(0, 0)',
            transition: 'transform 500ms ease-in-out'
          }}
          className={`${selectedMember === "Zimeng Jessie Yu" && showOverlay ? 'z-10' : ''}`}
        >
          <img 
            src="members/19.png" 
            className={`
              w-[180px] h-[180px] border-[6px] border-[#4874CB] rounded-full 
              transition-all duration-300 ease-in-out cursor-pointer
              ${selectedMember === "Zimeng Jessie Yu" && showDetails ? 
                "scale-180" : 
                "hover:scale-110"}
            `}
            onClick={() => handleMemberClick("Zimeng Jessie Yu")}
          />
          <p className={`text-center mt-3 w-[180px] text-[#7030A0] text-2xl font-bold ${selectedMember === "Zimeng Jessie Yu" && showOverlay ? 'invisible' : ''}`}>Zimeng Jessie Yu</p>
          <div className={`introduction text-xl ${selectedMember === "Zimeng Jessie Yu" && showDetails ? 'show' : ''}`}>
            <p>Hi guys. Hi, I'm Jessie. In my free time, I enjoy practicing calligraphy, listening to music, and traveling. I have growing interests in economics and chemistry, and I see iDEC as a valuable long-term commitment that will strengthen my research skills and ability to handle challenges and pressure in a scientific setting.</p>
          </div>
        </div>

        <div 
          ref={el => memberRefs.current["Xiaoyuchen Liu"] = el}
          style={{
            transform: selectedMember === "Xiaoyuchen Liu" && showDetails 
              ? `translate(${position.x}px, ${position.y}px)` 
              : 'translate(0, 0)',
            transition: 'transform 500ms ease-in-out'
          }}
          className={`${selectedMember === "Xiaoyuchen Liu" && showOverlay ? 'z-10' : ''}`}
        >
          <img 
            src="members/20.png" 
            className={`
              w-[180px] h-[180px] border-[6px] border-[#4874CB] rounded-full 
              transition-all duration-300 ease-in-out cursor-pointer
              ${selectedMember === "Xiaoyuchen Liu" && showDetails ? 
                "scale-180" : 
                "hover:scale-110"}
            `}
            onClick={() => handleMemberClick("Xiaoyuchen Liu")}
          />
          <p className={`text-center mt-3 w-[180px] text-[#7030A0] text-2xl font-bold ${selectedMember === "Xiaoyuchen Liu" && showOverlay ? 'invisible' : ''}`}>Xiaoyuchen Liu</p>
          <div className={`introduction text-xl ${selectedMember === "Xiaoyuchen Liu" && showDetails ? 'show' : ''}`}>
            <p>Hi, I'm Jake. My academic focus is on biology and bioengineering, largely inspired by my love for animals—I have several pets and enjoy spending time with them. I also love playing basketball. I am very eager to participate in iDEC and hope to achieve meaningful results with the team. This experience will help me deepen my knowledge and further pursue my passion for biological sciences.</p>
          </div>
        </div>
      </div>

      {/* 半透明遮罩 */}
      {showOverlay && (
        <div 
          className={`fixed inset-0 bg-gray-300/70 z-1 transition-opacity duration-500 ${showDetails ? 'opacity-100' : 'opacity-0'}`} 
          onClick={handleClose}
        >
        </div>
      )}
    </div>
  );
}
