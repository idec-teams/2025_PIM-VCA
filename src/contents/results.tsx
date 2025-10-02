export function Results() {
  

  return (
    <div className="bg-[#c8b8e8]">
      <img src="images/results/banner.webp" alt="Protocol" className="w-full" />
      <div className="container mx-auto py-8 px-4 text-xl">
        {/* 导航栏 */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <a 
            href="#assessment" 
            className="bg-[#e7e6e6] p-4 text-center text-[#4c1894] font-bold hover:bg-[#d6d4d4] transition-colors"
          >
            Assessment of different base modifying enzymes in <i>Escherichia coli</i>
          </a>
          <a 
            href="#buildup" 
            className="bg-[#e7e6e6] p-4 text-center text-[#4c1894] font-bold hover:bg-[#d6d4d4] transition-colors"
          >
            Buildup of MP6-UTT
          </a>
          <a 
            href="#stress-directed" 
            className="bg-[#e7e6e6] p-4 text-center text-[#4c1894] font-bold hover:bg-[#d6d4d4] transition-colors"
          >
            Stress-directed evolution of BL21(DE3) under industry-related stress
          </a>
          <a 
            href="#seawater" 
            className="bg-[#e7e6e6] p-4 text-center text-[#4c1894] font-bold hover:bg-[#d6d4d4] transition-colors"
          >
            Improve BL21(DE3) growth in simulate seawater
          </a>
          <a 
            href="#comparison" 
            className="bg-[#e7e6e6] p-4 text-center text-[#4c1894] font-bold hover:bg-[#d6d4d4] transition-colors"
          >
            Comparison: Traditional Fermentation vs. Seawater Fermentation
          </a>
          <a 
            href="#gut-related" 
            className="bg-[#e7e6e6] p-4 text-center text-[#4c1894] font-bold hover:bg-[#d6d4d4] transition-colors"
          >
            Stress-directed evolution of Nissle 1917 for gut-related applications
          </a>
        </div>

        {/* 正文内容 */}
        <div className="mb-8 text-xl">
          <div id="assessment">
            <p><div className="text-[#4c1894] text-3xl mb-6 mt-20 font-bold">Assessment of different base modifying enzymes in <i>Escherichia coli</i></div></p>
            <p>Several novel base editors have demonstrated high efficiency. TadA8e and TadA8r, both adenosine deaminases, catalyze adenine (A) deamination. During replication or repair, this deamination is recognized as guanine (G), enabling efficient A-to-G conversion. TDG3 efficiently excises thymine (T) in <i>E. coli</i>; the resulting abasic site is often repaired with adenine (A), showcasing its potential for creating base diversity. CDG4 excises cytosine (C), which is primarily replaced by adenine (A) or thymine (T), enabling multi-directional C editing. Together, these enzymes enrich the base-editing toolkit, enabling more flexible and efficient genetic modifications in prokaryotic and eukaryotic systems.</p>
            <p>To test the mutagenic efficiency of these enzymes in&nbsp;<i>E. coli</i>, we used a reporter system based on a mutated chloramphenicol resistance gene (CmR). The start codon ATG was replaced with non-canonical codons (ATA, TTG, or CTG), disrupting translation initiation. Each variant served as substrates to test TadA8e, TadA8r, TDG3, and CDG4. Successful base editing that restored a functional start codon would confer chloramphenicol resistance, allowing growth on selective plates.</p>
            <p className="text-justify">We synthesized genes for four base-modifying enzymes and expressed them using the constitutive plasmid plac. To validate plac's expression strength, we introduced the reporter <i>tsPurple</i>; resulting purple <i>E. coli</i>&nbsp;colonies confirmed high-level gene expression.</p>
            <p>&nbsp;</p>
            <div className="flex justify-center">
              <img src="images/results/1.webp" className="w-3/4 my-2" />
            </div>
            <p className="text-center text-lg"><strong>Fig.1&nbsp;Expression of tsPurple under plac promoter.</strong></p>
            <p className="text-center text-lg">The tsPurple gene was cloned under plac and transformed into DH5α, and selected in LB plate with spectinomycin under 37℃ for 12h.</p>
            <p className="text-justify">&nbsp;</p>
            <p>However, when expressing the four enzymes from this vector, their cloning efficiencies varied significantly.</p>
            <p>&nbsp;</p>
            <div className="flex justify-center">
              <img src="images/results/2.webp" className="w-3/4 my-2" />
            </div>
            <p className="text-center text-lg"><strong>Fig.2&nbsp;Construction of plac-CDG4, plac-TadA8e, plac-TadA8r and plac-TDG3.</strong></p>
            <p><strong>&nbsp;</strong></p>
            <p>We suspected the low construction efficiency was due to DNA-targeting enzyme cytotoxicity. To minimize toxicity for our mutagenesis system, we selected three less toxic enzymes—TadA8e, CDG4, and TDG3—for further testing.<br />&nbsp;&nbsp;&nbsp; We then introduced ATA-CmR with plac-TadA8e, CTG-CmR with plac-CDG4, and TTG-CmR with plac-TDG3 into&nbsp;<i>E. coli</i>. Transformants were cultured in LB medium and then plated on chloramphenicol-containing plates to assess editing efficiency (Figure XXX).</p>
            <p>&nbsp;</p>
            <div className="flex justify-center">
              <img src="images/results/3.webp" className="w-3/4 my-2" />
            </div>
            <p className="text-center text-lg"><strong>Fig.3&nbsp;CmR rescue by three enzymes.</strong></p>
            <p className="text-center text-lg">(A) TDG3, turning T to A, and rescue TTG to ATG start codon for CmR expression. (B) CDG4, turning C to T, and rescue ACG to ATG start codon for CmR expression (C) TadA8e, turning A to G, and rescue ATA to ATG start codon for CmR expression. For each panel, E. coli transformed with CmR*-reporters (left) and reporters with enzyme-expressing plasmid (right) was cultured overnight and spread in chloramphenicol-containing LB plate.</p>
          </div>
          
          <div id="buildup" className="mt-8">
            <p><div className="text-[#4c1894] text-3xl mb-6 mt-20 font-bold">Buildup of MP6-UTT</div></p>
            <p>After confirming the mutagenic activities of TadA8e, CDG4, and TDG3, we aimed to incorporate them into the broad-spectrum mutagenesis plasmid MP6. Due to their cytotoxicity, expression required tight control using a low-leakage inducible promoter. We chose the arabinose-inducible pBAD promoter and verified its tight regulation using a pBAD-tsPurple construct. <i>tsPurple</i>&nbsp;expression was fully repressed without arabinose and strongly induced in its presence.</p>
            <p>&nbsp;</p>
            <div className="flex justify-center">
              <img src="images/results/4.webp" className="w-3/4 my-2" />
            </div>
            <p className="text-center text-lg"><strong>Fig.4&nbsp;Performance of pBAD, as presented by tsPurple.</strong>&nbsp;</p>
            <p className="text-center text-lg">E. coli transformed with pBAD-tsPurple was cultured overnight without (left) or with 0.5% (m/v) L-arabinose (right).</p>
            <p>&nbsp;</p>
            <p className="text-justify">Using the existing pBAD promoter in MP6, we inserted Pbad-TadA8e-CDG4-TDG3 between the plasmid's replication origin and resistance gene. This design ensures system stability:&nbsp;any recombination between the two pBAD promoters would result in loss of either the origin or resistance gene, preventing plasmid propagation. The correctly sequenced MP6-UTT plasmid was successfully constructed:</p>
            <p>&nbsp;</p>
            <div className="flex justify-center">
              <img src="images/results/5.webp" className="w-3/4 my-2" /><strong>&nbsp;</strong>
            </div>
            <p className="text-center text-lg"><strong>Fig.5&nbsp;Sequencing result of MP6-UTT.</strong>&nbsp;</p>
            <p className="text-center text-lg">&nbsp;</p>
            <p>We introduced the construct into BL21, confirmed by colony PCR. Upon overnight induction with arabinose, no significant growth inhibition was observed, indicating the&nbsp;MP6-UTT system's suitability&nbsp;for stress-induced evolution in BL21.&nbsp;Similarly, in Nissle 1917, no growth inhibition was observed, suggesting its&nbsp;applicability there as well.</p>
            <p>&nbsp;</p>
            <div className="flex justify-center">
              <img src="images/results/6.webp" className="w-3/4 my-2" />
            </div>
            <p className="text-center text-lg"><strong>Fig.6&nbsp;Test the compatibility of MP6-UTT with BL21 and Nissle 1917.</strong>&nbsp;</p>
            <p className="text-center text-lg">(A) Colony PCR results of BL21 (left) and Nissle 1917 (right) transformed with MP6-UTT. For each gel, maker, amplicon of the first gene cluster and of the second one were shown. (B) Growth of BL21-MP6-UTT without&nbsp;ot with MP6-UTT induction. (C) Growth of Nissle 1917-MP6-UTT without&nbsp;ot with MP6-UTT induction.</p>
          </div>
          
          <div id="stress-directed" className="mt-8">
            <p><div className="text-[#4c1894] text-3xl mb-6 mt-20 font-bold">Stress-directed&nbsp;evolution of BL21(DE3) under industry-related stress</div></p>
            <p>Engineering xylose utilization in <i>E. coli</i>&nbsp;BL21(DE3) offers key benefits for synthetic biology and industrial applications. As a major chassis for recombinant protein production, enhancing its ability to metabolize xylose allows growth on lignocellulosic hydrolysates–a cost-effective carbon source. This improves carbon efficiency, reduces glucose dependency, and supports the production of biofuels, biochemicals, and proteins. A xylose-optimized BL21(DE3) thus provides a more versatile and economical platform for research and biomanufacturing.</p>
            <p>&nbsp;</p>
            <table className="table w-full">
              <tbody>
                <tr>
                  <td className="bg-[#4874cb] border border-[#4874cb] align-top p-2">
                    <span className="text-white"><strong>Application Area</strong></span>
                  </td>
                  <td className="bg-[#4874cb] border-t border-b border-[#4874cb] align-top p-2">
                    <span className="text-white"><strong>Specific Products/Directions</strong></span>
                  </td>
                  <td className="bg-[#4874cb] border border-[#4874cb] align-top p-2">
                    <span className="text-white"><strong>Engineering Strategies</strong></span>
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#4874cb] align-top p-2">
                    <strong>Biofuel Production</strong>
                  </td>
                  <td className="border-t border-b border-[#4874cb] align-top p-2">
                    Ethanol, butanol, isopropanol; advanced fuels (fatty acid derivatives, alkanes) [1–2]
                  </td>
                  <td className="border border-[#4874cb] align-top p-2">
                    Enhance xylose metabolism to increase NADPH/acetyl-CoA supply
                  </td>
                </tr>
                <tr>
                  <td className="border-l border-r border-[#4874cb] align-top p-2">
                    <strong>Bio-based Chemicals</strong>
                  </td>
                  <td className="align-top p-2">
                    Organic acids (lactic acid, succinic acid), amino acids (lysine, glutamate), sugar derivatives (xylitol, xylulose) [3–5]
                  </td>
                  <td className="border-l border-r border-[#4874cb] align-top p-2">
                    Redirect metabolic flux toward target product pathways to improve yields
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#4874cb] align-top p-2">
                    <strong>Lignocellulose Valorization</strong>
                  </td>
                  <td className="border border-[#4874cb] align-top p-2">
                    Mixed glucose + xylose fermentation for cost-efficient, high-yield biorefinery [6–7]
                  </td>
                  <td className="border border-[#4874cb] align-top p-2">
                    Eliminate carbon catabolite repression (CCR) to enable simultaneous glucose and xylose utilization
                  </td>
                </tr>
                <tr>
                  <td className="border border-[#4874cb] align-top p-2">
                    <strong>Protein Expression &amp; Synthetic Integration</strong>
                  </td>
                  <td className="border border-[#4874cb] align-top p-2">
                    Using xylose as a carbon source for recombinant protein expression; coupling metabolism engineering with protein production in the same chassis [8–9]
                  </td>
                  <td className="border border-[#4874cb] align-top p-2">
                    Optimize chassis adaptability by integrating xylose metabolism with protein expression systems
                  </td>
                </tr>
              </tbody>
            </table>
            <p>&nbsp;</p>
            <p>Adaptive laboratory evolution (ALE) under xylose stress effectively enhances xylose utilization in <i>E. coli</i>&nbsp;BL21. Unlike targeted metabolic engineering, this stress-driven approach enables the accumulation of beneficial mutations across global regulatory and metabolic networks, systemically optimizing transport, catabolism, and cofactor balance.</p>
            <p>We improved xylose metabolism in BL21(DE3) using MP6-UTT by serial passage with arabinose induction (as in XX). Growth is shown in Figure XX. Evolved strains were streaked and compared to unevolved controls (Figure XX). Protein expression capability was confirmed by introducing plac-tsPurple; purple colonies after overnight culture indicated normal tsPurple production. These results demonstrate MP6-UTT rapidly enhances xylose metabolism in BL21(DE3) without compromising protein synthesis, suggesting industrial application potential.</p>
            <p>&nbsp;</p>
            <div className="flex justify-center">
              <img src="images/results/7.webp" className="w-3/4 my-2" />
            </div>
            <p className="text-center text-lg"><strong>Fig.7&nbsp;Improve growth of BL21(DE3) using xylose as carbon source by MP6-UTT.</strong></p>
            <p className="text-center text-lg">(A) Daily passaging of BL21(DE3)-UTT in MOPS medium with xylose as the sole carbon source. The inoculation ratios and transfer conditions are shown on the left. A total of five passages were performed under identical conditions (37 °C, overnight). The bacterial growth after each overnight passage is shown on the right.&nbsp;(B)&nbsp;Comparison of growth between the evolved strain and the wild-type strain (harboring only MP6-UTT without passaging) after completion of the adaptive evolution process.<strong>&nbsp;</strong>(C)&nbsp;Characterization of the protein synthesis capacity of the evolved strain, assessed using tsPurple, which causes colonies to appear purple.</p>
          </div>
          
          <div id="seawater" className="mt-8">
            <p><div className="text-[#4c1894] text-3xl mb-6 mt-20 font-bold">Improve BL21(DE3) growth in simulate seawater</div></p>
            <p>Seawater fermentation is superior to conventional freshwater-based methods in resource use, microbial adaptability, and energy efficiency. Using seawater as the medium conserves freshwater and provides a mineral-rich environment that supports specialized metabolism. High-salinity conditions favor halophilic or halotolerant strains, expanding the range of industrial hosts and enabling unique production pathways. The natural antimicrobial property of seawater also reduces sterilization needs, cutting energy consumption. This makes seawater fermentation a more sustainable and promising alternative for future industrial biotechnology.</p>
          </div>
          
          <div id="comparison" className="mt-8">
            <p><div className="text-[#4c1894] text-3xl mb-6 mt-20 font-bold">Comparison: Traditional Fermentation vs. Seawater Fermentation</div></p>
            <p><strong>&nbsp;</strong></p>
            <table className="table w-full">
              <tbody>
                <tr>
                  <td className="border border-black align-top p-2">Aspect</td>
                  <td className="border border-black align-top p-2">Traditional Fermentation (Freshwater)</td>
                  <td className="border border-black align-top p-2">Seawater Fermentation</td>
                </tr>
                <tr>
                  <td className="border border-black align-top p-2">Water Source</td>
                  <td className="border border-black align-top p-2">Relies on large amounts of freshwater,&nbsp;requires additional salts</td>
                  <td className="border border-black align-top p-2">Uses natural or synthetic seawater, inherently contains multiple salts</td>
                </tr>
                <tr>
                  <td className="border border-black align-top p-2">Ionic Composition</td>
                  <td className="border border-black align-top p-2">Low-salt, mainly dependent on artificial formulation</td>
                  <td className="border border-black align-top p-2">High-salt (NaCl, Mg²⁺, Ca²⁺, etc.), mineral-rich environment</td>
                </tr>
                <tr>
                  <td className="border border-black align-top p-2">Microbial Hosts</td>
                  <td className="border border-black align-top p-2">Common hosts include E. coli, yeast, Bacillus subtilis, adapted to low-salt conditions</td>
                  <td className="border border-black align-top p-2">Requires halophilic/halotolerant strains or engineered conventional hosts</td>
                </tr>
                <tr>
                  <td className="border border-black align-top p-2">Osmotic Pressure</td>
                  <td className="border border-black align-top p-2">Low osmotic stress, minimal pressure on cells</td>
                  <td className="border border-black align-top p-2">High osmotic environment, cells must produce compatible solutes or adjust ion balance</td>
                </tr>
                <tr>
                  <td className="border border-black align-top p-2">Sterilization &amp; Energy</td>
                  <td className="border border-black align-top p-2">Requires strict high-temperature, high-pressure sterilization → high energy consumption, strong dependence on steam/electricity</td>
                  <td className="border border-black align-top p-2">High-salt environment is naturally antimicrobial → lower sterilization needs, significantly reduced energy demand</td>
                </tr>
                <tr>
                  <td className="border border-black align-top p-2">Sustainability</td>
                  <td className="border border-black align-top p-2">Consumes freshwater, higher environmental pressure</td>
                  <td className="border border-black align-top p-2">Conserves freshwater, reduces energy dependence, aligned with green bioprocessing</td>
                </tr>
              </tbody>
            </table>
            <p>&nbsp;</p>
            <p>Seawater tolerance engineering significantly broadens the application scope of <i>E. coli</i>&nbsp;BL21(DE3). This adaptation enables recombinant protein and metabolite production directly in seawater, reducing freshwater use and costs-especially beneficial in water-scarce regions. The salt-tolerant strain can utilize high-salinity substrates like marine biomass hydrolysates without desalination. Furthermore, it serves as a chassis for marine applications such as oil spill bioremediation and plastic degradation, highlighting its dual potential for industrial biomanufacturing and environmental sustainability.</p>
            <p>Using MP6-UTT, we optimized BL21(DE3) growth in simulated seawater by serial passaging under arabinose induction (as in XX). Growth profiles are shown in Figure XX. Evolved strains were streaked next to the parent (Figure XX), and protein expression was confirmed by introducing plac-tsPurple; purple colonies after overnight culture indicated normal tsPurple production. These results show that MP6-UTT rapidly improves seawater tolerance in BL21(DE3) without affecting protein synthesis, underscoring its industrial potential.</p>
            <p>&nbsp;</p>
            <div className="flex justify-center">
              <img src="images/results/8.webp" className="w-3/4 my-2" /><strong>&nbsp;</strong>
            </div>
            <p className="text-center text-lg"><strong>Fig.8&nbsp;Improve growth of BL21(DE3) in seawater environment by MP6-UTT.</strong></p>
            <p className="text-center text-lg text-justify">(A)&nbsp;Daily passaging of BL21(DE3)-UTT in mixed LB medium, prepared by combining LB made with simulated seawater and LB made with regular water. The specific inoculation ratios and transfer conditions for each passage are shown on the left. In total, eight passages were carried out under identical conditions (37 °C, overnight). The bacterial growth after each overnight passage is shown on the right.&nbsp;(B)&nbsp;After the adaptive evolution process, the evolved strain was compared with the wild-type strain (harboring only MP6-UTT without passaging) in LB medium prepared entirely with simulated seawater.&nbsp;(C)&nbsp;Characterization of the protein synthesis capacity of the evolved strain, assessed using tsPurple, which causes colonies to appear purple.</p>
          </div>
          
          <div id="gut-related" className="mt-8">
            <p><div className="text-[#4c1894] text-3xl mb-6 mt-20 font-bold">Stress-directed&nbsp;evolution of Nissle 1917 for gut-related applications</div></p>
            <p>Synthetic biology offers a novel approach to treating intestinal diseases beyond traditional drugs or probiotics. Engineered bacteria can continuously produce therapeutics in the gut, dynamically sense environmental cues, and perform complex tasks like modulating metabolites, outcompeting pathogens, and regulating immunity. This combination of durability and precision makes them promising candidates for treating inflammatory bowel disease, infections, and metabolic syndromes.</p>
            <p>A key challenge in using engineered bacteria to treat gut diseases is achieving stable colonization. The intestinal environment is highly competitive, with resident microbiota monopolizing resources and adhesion sites. Even when therapeutic functions are added, engineered strains often fail to withstand microbial competition, immune clearance, and metabolic pressures. Consequently, their populations decline over time, limiting long-term persistence and therapeutic efficacy.</p>
            <p>Enhancing engineered bacteria's efficiency in utilizing specific carbon sources can provide a nutritional advantage. By enabling them to metabolize underutilized dietary substrates, they can occupy a "dedicated ecological niche", promoting early colonization and strengthening therapeutic effect. While insufficient alone, combining this with adhesion enhancement and immune evasion can significantly improve their gut survival and stability.</p>
            <p>&nbsp;</p>
            <div className="flex justify-center">
              <img src="images/results/9.webp" className="w-3/4 my-2" />
            </div>
            <p className="text-center text-lg"><strong>Fig.9&nbsp;Challenges and potential solutions of gut probiotic therapy.</strong></p>
            <p className="text-center text-lg">&nbsp;(A) Engineered probiotics may be displaced by wild-type microbial communities, leading to the loss of their ecological niche. This effect can be mitigated by supplementing a carbon source that only the engineered strain is able to utilize.&nbsp;(B) Schematic logic of how a specific carbon source compensates for the ecological niche.</p>
            <p>&nbsp;</p>
            <p>We next applied MP6-UTT to improve tagatose utilization in <i>Escherichia coli </i>Nissle&nbsp;1917. Tagatose, a food-grade sugar metabolized by few microbes, serves as a relatively specific carbon source for this strain.</p>
            <p>As described in XX, the MP6-UTT plasmid was serially passaged with continuous arabinose induction. Growth after each passage is shown in Figure XX. After evolution, the strains were streaked and compared to the parent in monichangye medium (Figure XX), confirming that MP6-UTT rapidly generated Nissle 1917 variants with enhanced tagatose utilization.</p>
            <p>Furthermore, this approach lays the foundation for continued adaptive evolution or for metabolic engineering toward alternative carbon sources, thereby enhancing the therapeutic potential of Nissle 1917 in treating intestinal disorders.</p>
            <p>&nbsp;</p>
            <div className="flex justify-center">
              <img src="images/results/10.webp" className="w-3/4 my-2" />
            </div>
            <p className="text-center text-lg"><strong>Fig.10&nbsp;Improve growth of Nissle 1917 in gut-stimulated environment with tagatose by MP6-UTT.</strong></p>
            <p className="text-center text-lg">(A) Daily passaging of Nissle 1917-MP6-UTT in MOPS medium with tagatose.&nbsp;In total, eight passages were carried out under identical conditions (37 °C, overnight). The bacterial growth after each overnight passage is shown on the right.&nbsp;(B) After the adaptive evolution process, the evolved strain was compared with the wild-type strain (harboring only MP6-UTT without passaging) in simulate intestinal fluid with tagatose. (C) Statistical analysis of the growth performance of the strains before and after evolution.</p>
          </div>
        </div>
      </div>
    </div>
  );
}