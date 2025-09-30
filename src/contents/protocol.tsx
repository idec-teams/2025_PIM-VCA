

export function Protocol() {
  return (
    <>
      <img src="images/protocol/banner.webp" alt="Protocol" className="w-full" />
      <div className="container mx-auto py-8 px-4 text-xl">
        <div className="prose max-w-none">
          <ol className="list-decimal pl-6">
            <li className="font-semibold text-2xl mb-6 mt-10">Amplification of the Target Gene by PCR</li>
          </ol>
          
          <p className="font-medium my-3">Table 1: Amplification of the Target Gene by PCR</p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Component</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Volume/μL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">ddH<sub>2</sub>O</td>
                  <td className="border border-gray-300 px-4 py-2">Add to 50</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Template</td>
                  <td className="border border-gray-300 px-4 py-2">2</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Forward Primer F</td>
                  <td className="border border-gray-300 px-4 py-2">2</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Reverse Primer R</td>
                  <td className="border border-gray-300 px-4 py-2">2</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">2×Phanta Flash Master Mix</td>
                  <td className="border border-gray-300 px-4 py-2">25</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="font-medium my-3">Table 2: PCR Amplification Program</p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Step</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Temperature/℃</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Time/s</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">1</td>
                  <td className="border border-gray-300 px-4 py-2">Initial Denaturation</td>
                  <td className="border border-gray-300 px-4 py-2">98</td>
                  <td className="border border-gray-300 px-4 py-2">30</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">2</td>
                  <td className="border border-gray-300 px-4 py-2">Denaturation</td>
                  <td className="border border-gray-300 px-4 py-2">98</td>
                  <td className="border border-gray-300 px-4 py-2">10</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">3</td>
                  <td className="border border-gray-300 px-4 py-2">Annealing</td>
                  <td className="border border-gray-300 px-4 py-2">Tm+5℃</td>
                  <td className="border border-gray-300 px-4 py-2">5</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">4</td>
                  <td className="border border-gray-300 px-4 py-2">Extension</td>
                  <td className="border border-gray-300 px-4 py-2">72</td>
                  <td className="border border-gray-300 px-4 py-2">5-10 s/kb</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">5</td>
                  <td className="border border-gray-300 px-4 py-2">Final Extension</td>
                  <td className="border border-gray-300 px-4 py-2">72</td>
                  <td className="border border-gray-300 px-4 py-2">30</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">6</td>
                  <td className="border border-gray-300 px-4 py-2">Hold</td>
                  <td className="border border-gray-300 px-4 py-2">16</td>
                  <td className="border border-gray-300 px-4 py-2">60</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-6">Program steps 2-4 are run for 35 cycles.</p>

          <ol start={2} className="list-decimal pl-6">
            <li className="font-semibold text-2xl mb-6 mt-10">Verification by Agarose Gel Electrophoresis</li>
          </ol>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Prepare a 1% agarose gel: Dissolve 0.6 g of agarose in 60 mL of 1× TAE buffer. Heat until completely dissolved. After slightly cooling, add 6 μL of GelRed nucleic acid dye, mix gently, and pour the solution into a gel tray with a well comb inserted. Allow the gel to solidify at room temperature for subsequent electrophoresis;</li>
            <li className="mb-2">Mixing and Loading: Add 10 μL of 6× loading buffer to the sample and mix well;</li>
            <li className="mb-2">Electrophoresis: Run the gel at 90 V for 1 hour;</li>
            <li className="mb-2">Observe the results.</li>
          </ul>

          <ol start={3} className="list-decimal pl-6">
            <li className="font-semibold text-2xl mb-6 mt-10">Gel Extraction</li>
          </ol>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Cut the gel slice using a gel cutter, place the excised gel pieces into a 1.5 mL EP tube, and record the weight;</li>
            <li className="mb-2">Add 3 volumes (approximately 600 μL) of Binding Buffer PE to the 1.5 mL EP tube. Incubate at 50°C to dissolve the gel, gently inverting the tube periodically to ensure complete dissolution;</li>
            <li className="mb-2">Transfer the dissolved gel solution to a Binding Column CA5 and let it stand at room temperature for 5 minutes. Centrifuge at 12,000 rpm for 60 seconds;</li>
            <li className="mb-2">Transfer the flow-through from the collection tube back onto the same binding column. Incubate at room temperature for 5 minutes, then centrifuge at 12,000 rpm for 60 seconds. Discard the flow-through;</li>
            <li className="mb-2">Add 600 μL of Wash Buffer PW to the binding column. Incubate at room temperature for 5 minutes, then centrifuge at 12,000 rpm for 60 seconds. Discard the waste liquid in the collection tube and place the binding column CA5 back into the collection tube;</li>
            <li className="mb-2">Repeat the last step;</li>
            <li className="mb-2">Place the binding column into the collection tube and centrifuge at 12,000 rpm for 2 minutes to remove any residual wash buffer. Transfer the binding column to a 50°C oven for 5 minutes to complete drying;</li>
            <li className="mb-2">Place the binding column into a new 1.5 mL EP tube. Add 30 μL of ddH₂O to the center of the binding membrane. Incubate at room temperature for 2 minutes, then centrifuge at 12,000 rpm for 2 minutes to collect the DNA solution;</li>
            <li className="mb-2">Reload the eluted DNA solution onto the binding membrane and let it stand at room temperature for 2 minutes. Centrifuge at 12,000 rpm for 2 minutes. Discard the flow-through and measure the DNA concentration using a spectrophotometer.</li>
          </ul>

          <ol start={4} className="list-decimal pl-6">
            <li className="font-semibold text-2xl mb-6 mt-10">Plasmid Extraction</li>
          </ol>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Column Equilibration: Add 500 μL of Equilibration Buffer BL to the Binding Column CP3. Centrifuge at 12,000 rpm for 1 minute. Place the column back into the collection tube.</li>
            <li className="mb-2">Take 1–5 mL of overnight bacterial culture and transfer it to a centrifuge tube. Centrifuge at 12,000 rpm for 1 minute using a benchtop centrifuge. Aspirate and discard the supernatant completely. If dealing with a larger volume, repeat centrifugation to collect all bacterial pellets into one tube.</li>
            <li className="mb-2">Add 250 μL of Solution P1 to the pellet. Resuspend the bacterial cells thoroughly using a pipette or vortex mixer.</li>
            <li className="mb-2">Add 250 μL of Solution P2 to the tube. Gently invert the tube 6–8 times to lyse the cells completely.</li>
            <li className="mb-2">Add 350 μL of Solution P3 to the tube. Immediately invert the tube gently 6–8 times to mix thoroughly. A white flocculent precipitate will form. Centrifuge at 12,000 rpm for 10 minutes.</li>
            <li className="mb-2">Carefully transfer the supernatant from the previous step to the Binding Column CP3 without disturbing the pellet. Centrifuge at 12,000 rpm for 60 seconds. Discard the flow-through and place the column back into the collection tube.</li>
            <li className="mb-2">Add 600 μL of Wash Buffer PW to the column. Centrifuge at 12,000 rpm for 60 seconds. Discard the flow-through and place the column back into the collection tube.</li>
            <li className="mb-2">Repeat the wash step once.</li>
            <li className="mb-2">Place the column into the collection tube and centrifuge at 12,000 rpm for 2 minutes to remove any residual wash buffer.</li>
            <li className="mb-2">Transfer the Binding Column CP3 to a clean centrifuge tube. Add 50–100 μL of ddH₂O (deionized water) to the center of the binding membrane. Let it stand at room temperature for 2 minutes. Centrifuge at 12,000 rpm for 2 minutes to collect the plasmid DNA solution in the tube.</li>
          </ul>

          <ol start={5} className="list-decimal pl-6">
            <li className="font-semibold text-2xl mb-6 mt-10">Ligation</li>
          </ol>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-300">
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 w-1/2">2 x CE mix</td>
                  <td className="border border-gray-300 px-4 py-2 w-1/2">10ul</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">H<sub>2</sub>O</td>
                  <td className="border border-gray-300 px-4 py-2">5ul</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Vector</td>
                  <td className="border border-gray-300 px-4 py-2">2.5ul</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">gene</td>
                  <td className="border border-gray-300 px-4 py-2">2.5ul</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ol start={6} className="list-decimal pl-6">
            <li className="font-semibold text-2xl mb-6 mt-10">Transformation</li>
          </ol>
          <ol className="list-decimal pl-6 mb-6">
            <li className="mb-2">Remove competent cells from the -80 °C freezer and thaw them on ice for 5 minutes. Add 1 μl of plasmid DNA and incubate on ice for 30 minutes.</li>
            <li className="mb-2">Heat shock the cells in a 42 °C water bath for 90 seconds, then place them back on ice for 2 minutes.</li>
            <li className="mb-2">In a biosafety cabinet, add 900 μl of antibiotic-free LB liquid medium. Incubate the mixture at 37 °C with shaking at 200 rpm for 1 hour.</li>
            <li className="mb-2">In the biosafety cabinet, centrifuge the cells at 5000 rpm for 5 minutes to concentrate on them. Gently resuspend the pellet using a pipette, then spread 50 μl of the cell suspension onto an LB agar plate containing the appropriate antibiotic. Incubate the plate upside down at 37 °C overnight for 14–16 hours.</li>
          </ol>

          <ol start={7} className="list-decimal pl-6">
            <li className="font-semibold text-2xl mb-6 mt-10">IPTG Induction</li>
          </ol>
          <ol className="list-decimal pl-6 mb-6">
            <li className="mb-2">Inoculate 300 μL of overnight seed culture into 50 mL of medium. Add antibiotic. After 3 hours, measure OD600, which should be between 0.6 and 0.8. Before induction, collect 5 samples, centrifuge at 12,000 rpm for 1 minute, discard the supernatant, and store the pellets at -20°C.</li>
            <li className="mb-2">Add IPTG to a final concentration of 0.5 mM.</li>
            <li className="mb-2">Induce at 37°C for 16 hours. Then centrifuge at 12,000 rpm for 1 minute, discard the supernatant, and store the pellets at -20°C.</li>
          </ol>

          <ol start={8} className="list-decimal pl-6">
            <li className="font-semibold text-2xl mb-6 mt-10">Protein Electrophoresis</li>
          </ol>
          <ol className="list-decimal pl-6 mb-6">
            <li className="mb-2">Mix 500 μL Tris-HCl (pH = 8.0) with 500 μL 2× SDS-PAGE loading buffer.</li>
            <li className="mb-2">Take 30 μL of the mixture containing suspended bacteria and heat in a boiling water bath for 5 minutes.</li>
            <li className="mb-2">Centrifuge at 13,000 g for 30 minutes, then collect the supernatant. Load 20 μL of the sample. Run SDS-PAGE at 90 V for 90 minutes, followed by 120 V for 20 minutes.</li>
            <li className="mb-2">Stain with Coomassie Brilliant Blue for 15 minutes. Wash with protein de-staining solution and de-stain overnight.</li>
          </ol>
        </div>
      </div>
    </>
  );
}
