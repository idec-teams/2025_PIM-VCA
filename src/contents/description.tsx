export function Description() {
  return (
    <div className="bg-[#c8b8e8]">
      <img src="images/description/banner.webp" alt="Description" className="w-full" />
      <div className="container mx-auto py-8 px-4 text-xl">
        {/* 导航栏 */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <a 
            href="#background" 
            className="bg-[#e7e6e6] p-4 text-center text-[#4c1894] font-bold hover:bg-[#d6d4d4] transition-colors"
          >
            Background and Objectives
          </a>
          <a 
            href="#methods" 
            className="bg-[#e7e6e6] p-4 text-center text-[#4c1894] font-bold hover:bg-[#d6d4d4] transition-colors"
          >
            Methods
          </a>
          <a 
            href="#key-results" 
            className="bg-[#e7e6e6] p-4 text-center text-[#4c1894] font-bold hover:bg-[#d6d4d4] transition-colors"
          >
            Key Results
          </a>
          <a 
            href="#application" 
            className="bg-[#e7e6e6] p-4 text-center text-[#4c1894] font-bold hover:bg-[#d6d4d4] transition-colors"
          >
            Application Value
          </a>
        </div>

        {/* 正文内容 */}
        <div className="mb-8 text-xl">
          <div id="background">
            <p><div className="text-[#4c1894] text-3xl mb-6 mt-20 font-bold">Background and Objectives</div></p>
            <p>Synthetic biology aims to engineer microorganisms for industrial production (e.g., biofuels, biochemicals) and disease treatment (e.g., probiotic therapy). However, commonly used model strains (e.g., <i>E.&nbsp;coli</i>&nbsp;BL21 (DE3), <i>E.&nbsp;coli</i>&nbsp;Nissle 1917) often lack adaptability to specific real-world contexts—such as lignocellulosic hydrolysate utilization (for industry), high-salinity seawater fermentation (for sustainable manufacturing), and competitive gut environments (for therapeutics). Adaptive Laboratory Evolution (ALE) is a strategy to enhance strain tolerance via simulated environmental pressures, but its widespread use is limited by low efficiency. &nbsp;</p>
            <p>This project aimed to develop a high-efficiency, broad-spectrum genetic tool for stress-directed evolution to accelerate microbial adaptation, addressing the above limitations. The tool, named MP6-UTT, integrates multiple base-modifying enzymes into the existing controllable in vivo mutagenesis system MP6, enabling targeted and efficient mutagenesis to enhance strain performance in industrial and therapeutic scenarios. &nbsp;</p>
          </div>
          
          <div id="methods" className="mt-8">
            <p><div className="text-[#4c1894] text-3xl mb-6 mt-20 font-bold">Methods</div></p>
            <p><strong>1. Screening of Base-Modifying Enzymes</strong>&nbsp;&nbsp;</p>
            <p>&nbsp;&nbsp;&nbsp;Four novel base-modifying enzymes (TadA8e, TadA8r, TDG3, CDG4) were evaluated for mutagenic efficiency and cytotoxicity in <i>E.&nbsp;coli</i>&nbsp;using a chloramphenicol resistance (Cmᴿ) rescue assay: a mutated Cmᴿ gene (with non-canonical start codons ATA/TTG/CTG) was used as a reporter, and enzyme-induced base editing to restore the ATG start codon was confirmed by colony growth on chloramphenicol plates. Three low-toxicity, high-efficiency enzymes (TadA8e, CDG4, TDG3) were selected (TadA8e catalyzes A→G; CDG4 enables C→A/T; TDG3 mediates T→A). &nbsp;</p>
            <p><strong>2. Construction of MP6-UTT</strong>&nbsp;&nbsp;</p>
            <p>&nbsp;&nbsp;&nbsp;The selected enzymes were integrated into the MP6 plasmid under the control of the arabinose-inducible pBAD promoter (low leakage, tight temporal control) to avoid cytotoxicity. The construct (Pbad-TadA8e-CDG4-TDG3) was inserted between MP6's replication origin and resistance gene to ensure stability (recombination would cause loss of essential plasmid elements, preventing propagation). MP6-UTT's compatibility with <i>E.&nbsp;coli</i>&nbsp;BL21 (DE3) and Nissle 1917 was verified via colony PCR and growth curve analysis (no significant growth inhibition under arabinose induction). &nbsp;</p>
            <p><strong>3. Stress-Directed Evolution and Validation</strong>&nbsp;&nbsp;</p>
            <p>&nbsp;&nbsp;&nbsp;For <i>E.&nbsp;coli </i>BL21 (DE3): Serial passaging was performed in (1) MOPS medium with xylose as the sole carbon source (to enhance xylose utilization) and (2) simulated seawater-LB mixtures (gradient seawater ratios: 1:9 to 9:1, to enhance salt tolerance). &nbsp;</p>
            <p>&nbsp;&nbsp;&nbsp;For <i>E.&nbsp;coli </i>Nissle 1917: Serial passaging was performed in MOPS medium with tagatose (a rarely metabolized carbon source) and simulated intestinal fluid (to improve gut colonization). &nbsp;</p>
            <p>&nbsp;&nbsp;&nbsp;Evolution efficiency was assessed via OD₆₀₀ measurements (growth performance) and a plac-tsPurple reporter assay (protein expression capability, confirmed by purple colonies). &nbsp;</p>
          </div>
          
          <div id="key-results" className="mt-8">
            <p><div className="text-[#4c1894] text-3xl mb-6 mt-20 font-bold">Key Results</div></p>
            <p><strong>1. Enhanced Industrial Adaptation of </strong><i><strong>E.coli</strong></i><strong>&nbsp;BL21 (DE3)</strong>&nbsp;&nbsp;</p>
            <p>&nbsp;&nbsp;&nbsp;Xylose Utilization: After serial passaging with MP6-UTT, BL21 (DE3) showed significantly improved growth in xylose-only medium (OD₆₀₀ increased over 7 days of passaging) without compromising protein synthesis (confirmed via tsPurple expression). This enables utilization of cost-effective lignocellulosic hydrolysates for biofuel/biochemical production. &nbsp;</p>
            <p>&nbsp;&nbsp;&nbsp;Seawater Tolerance: Evolved BL21 (DE3) grew efficiently in 100% simulated seawater (vs. no growth of unevolved strains). Seawater fermentation reduces freshwater consumption and sterilization needs, aligning with sustainable biomanufacturing. &nbsp;</p>
            <p><strong>2. Improved Therapeutic Potential of </strong><i><strong>E.coli</strong></i><strong>&nbsp;Nissle 1917&nbsp;</strong>&nbsp;</p>
            <p>&nbsp;&nbsp;&nbsp;Evolved Nissle 1917 exhibited enhanced tagatose utilization, leading to improved survival in simulated intestinal fluid (OD₆₀₀ of evolved strains was significantly higher than unevolved controls). By occupying a "dedicated ecological niche" via tagatose metabolism, the strain resists competition from gut microbiota, supporting stable probiotic colonization for intestinal disease treatment. &nbsp;</p>
          </div>
          
          <div id="application" className="mt-8">
            <p><div className="text-[#4c1894] text-3xl mb-6 mt-20 font-bold">Application Value</div></p>
            <p>MP6-UTT serves as a versatile, high-efficiency platform for rapid microbial adaptation. It is compatible with multiple <i>E.&nbsp;coli</i>&nbsp;strains and can be extended to other microbial hosts (e.g., Bacillus subtilis, Vibrio natriegens). Its applications span: &nbsp;</p>
            <p><strong>1.&nbsp;Industrial synthetic biology</strong>&nbsp;(biofuel/biochemical production via lignocellulose valorization, sustainable seawater fermentation); &nbsp;</p>
            <p><strong>2.&nbsp;Therapeutic synthetic biology</strong>&nbsp;(enhanced probiotic colonization for gut disease treatment); &nbsp;</p>
            <p><strong>3.&nbsp;Future fields</strong>&nbsp;(e.g., space synthetic biology, biowaste recycling). &nbsp;</p>
            <p>This tool accelerates the translation of synthetic biology projects from laboratory research to real-world use.</p>
          </div>
        </div>
      </div>
    </div>
  );
}