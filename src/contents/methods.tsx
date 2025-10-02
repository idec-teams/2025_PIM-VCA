export function Methods() {
  return (
    <div className="bg-[#c8b8e8]">
      <img src="images/methods/banner.webp" alt="Methods" className="w-full" />
      <div className="container mx-auto py-8 px-4 text-xl">
        {/* 导航栏 */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <a 
            href="#plasmid-construction" 
            className="bg-[#e7e6e6] p-4 text-center text-[#4c1894] font-bold hover:bg-[#d6d4d4] transition-colors"
          >
            Plasmid construction
          </a>
          <a 
            href="#cmr-recovery-assay" 
            className="bg-[#e7e6e6] p-4 text-center text-[#4c1894] font-bold hover:bg-[#d6d4d4] transition-colors"
          >
            CmR recovery assay
          </a>
          <a 
            href="#evolution-by-mp6-ctt" 
            className="bg-[#e7e6e6] p-4 text-center text-[#4c1894] font-bold hover:bg-[#d6d4d4] transition-colors"
          >
            Evolution by MP6-CTT
          </a>
          <a 
            href="#growth-assay" 
            className="bg-[#e7e6e6] p-4 text-center text-[#4c1894] font-bold hover:bg-[#d6d4d4] transition-colors"
          >
            Growth assay
          </a>
          <a 
            href="#protein-expression-ability-assay" 
            className="bg-[#e7e6e6] p-4 text-center text-[#4c1894] font-bold hover:bg-[#d6d4d4] transition-colors"
          >
            Protein expression ability assay
          </a>
        </div>

        {/* 正文内容 */}
        <div className="mb-8 text-xl">
          <div id="plasmid-construction">
            <p><div className="text-[#4c1894] text-3xl mb-6 mt-20 font-bold">Plasmid construction</div></p>
            <p>Plasmid construction was carried out using standard molecular biology techniques. All genes were synthesized by Tsingke, while plasmid backbones were obtained from previously prepared stocks. PCR amplification was performed using <a href="https://www.vazymeglobal.com/product-center/high-fidelity-pcr/2-phanta-flash-master-mix-dye-plus"><span style={{ color: 'rgb(0,0,0)' }}>2 × Phanta Flash Master Mix (Dye Plus)</span></a>, and gene assembly was carried out with ClonExpress Ultra One Step Cloning Kit V2-C116, followed by synthesis confirmation at Tsingke. Plasmids were extracted using a plasmid extraction kit, and all procedures were performed strictly according to the manufacturer’s instructions.</p>
          </div>
          
          <div id="cmr-recovery-assay" className="mt-8">
            <p><div className="text-[#4c1894] text-3xl mb-6 mt-20 font-bold">CmR recovery assay</div></p>
            <p>The plac-TDG3, plac-CDG4, or plac-TadA8e plasmid, together with the corresponding Cmᴿ plasmid carrying a start codon defect, was co-transformed into E. coli DH5α. The transformation mixtures were plated on selective agar plates containing streptomycin and kanamycin. Successful transformants were subsequently cultured overnight in LB liquid medium, then spread onto chloramphenicol-containing agar plates. After overnight incubation at 37 °C, colony growth was examined.</p>
          </div>
          
          <div id="evolution-by-mp6-ctt" className="mt-8">
            <p><div className="text-[#4c1894] text-3xl mb-6 mt-20 font-bold">Evolution by MP6-CTT</div></p>
            <p>Induction of MP6-CTT was uniformly performed with 1% L-arabinose. For the different cases described in the manuscript, serial passaging was carried out according to the procedures illustrated in the corresponding figures. For the first generation, all cultures were initiated by overnight growth in either LB medium or MOPS minimal medium supplemented with the corresponding nutrient source, in order to obtain sufficient starter cultures.</p>
          </div>
          
          <div id="growth-assay" className="mt-8">
            <p><div className="text-[#4c1894] text-3xl mb-6 mt-20 font-bold">Growth assay</div></p>
            <p>Both the non-evolved and evolved strains were streaked on standard LB agar plates, and single colonies were inoculated into LB liquid medium for overnight culture. The overnight cultures were then centrifuged, and the supernatant was discarded. The cell pellets were resuspended in PBS, and this washing process was repeated three times to thoroughly remove residual LB medium. Subsequently, the cells were inoculated into media designed to simulate stress conditions, including MOPS–xylose medium, LB medium prepared with 100% artificial seawater, and a simulated intestinal fluid medium (a 1:1 mixture of MOPS minimal medium and&nbsp;simulated intestinal fluid). After overnight incubation, cultures were examined visually and/or measured for OD600.</p>
          </div>
          
          <div id="protein-expression-ability-assay" className="mt-8">
            <p><div className="text-[#4c1894] text-3xl mb-6 mt-20 font-bold">Protein expression ability assay</div></p>
            <p>The evolved strains were streaked onto LB agar plates, and single colonies were inoculated into LB liquid medium for overnight culture. Subsequently, chemically competent cells were prepared using the calcium chloride method, followed by transformation with the plac-tsPurple plasmid. The transformation products were plated onto kanamycin-containing LB agar plates and incubated overnight at 37 °C, after which the emergence of purple-colored colonies was examined.</p>
          </div>
        </div>
      </div>
    </div>
  );
}