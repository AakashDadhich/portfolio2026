export const factoryDiagram = `
<svg class="flow-diagram" viewBox="40 16 880 568" role="img" aria-labelledby="factory-diagram-title" xmlns="http://www.w3.org/2000/svg">
  <title id="factory-diagram-title">Secure Software Factory pipeline: spec, plan, threat model, generate code, security review, SAST, dependency and secret scans, DAST, then a gate. Failed gates loop back to code generation; passing runs are reported, shipped and stored, and the next change re-enters at the spec with the saved record.</title>
  <defs>
    <marker id="fd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" class="flow-arrowhead" />
    </marker>
    <marker id="fd-arrow-fail" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" class="flow-arrowhead--fail" />
    </marker>
    <marker id="fd-arrow-loop" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" class="flow-arrowhead--loop" />
    </marker>
  </defs>

  <g class="flow-edges">
    <line x1="276" y1="64" x2="296" y2="64" marker-end="url(#fd-arrow)" />
    <line x1="486" y1="64" x2="505" y2="64" marker-end="url(#fd-arrow)" />
    <line x1="695" y1="64" x2="685" y2="64" />
    <line x1="810" y1="100" x2="810" y2="156" marker-end="url(#fd-arrow)" />
    <line x1="810" y1="230" x2="810" y2="300" marker-end="url(#fd-arrow)" />
    <line x1="716" y1="338" x2="697" y2="338" marker-end="url(#fd-arrow)" />
    <line x1="507" y1="338" x2="488" y2="338" marker-end="url(#fd-arrow)" />
    <line x1="298" y1="338" x2="278" y2="338" marker-end="url(#fd-arrow)" />
    <line x1="182" y1="382" x2="182" y2="457" marker-end="url(#fd-arrow)" />
    <line x1="276" y1="495" x2="296" y2="495" marker-end="url(#fd-arrow)" />
  </g>

  <path class="flow-edge--fail" d="M182,294 V194 H685 V64 H714" marker-end="url(#fd-arrow-fail)" />
  <text class="flow-label flow-label--fail" x="248" y="184">fail: fix and re-scan</text>

  <path class="flow-edge--loop" d="M392,531 V570 H52 V64 H86" marker-end="url(#fd-arrow-loop)" />
  <text class="flow-label flow-label--loop" x="406" y="558">next change: re-enter with the saved record</text>

  <text class="flow-label" x="194" y="426">yes</text>

  <g class="flow-node flow-node--key">
    <rect x="88" y="28" width="188" height="72" rx="8" />
    <text class="flow-node-title" x="182" y="59">Spec or idea</text>
    <text class="flow-node-sub" x="182" y="81">or change request</text>
  </g>
  <g class="flow-node">
    <rect x="298" y="28" width="188" height="72" rx="8" />
    <text class="flow-node-title" x="392" y="59">Clarify and plan</text>
    <text class="flow-node-sub" x="392" y="81">tasks, risk level</text>
  </g>
  <g class="flow-node">
    <rect x="507" y="28" width="188" height="72" rx="8" />
    <text class="flow-node-title" x="601" y="59">Threat model</text>
    <text class="flow-node-sub" x="601" y="81">and secure design</text>
  </g>
  <g class="flow-node">
    <rect x="716" y="28" width="188" height="72" rx="8" />
    <text class="flow-node-title" x="810" y="59">Generate code</text>
    <text class="flow-node-sub" x="810" y="81">agents write, test</text>
  </g>
  <g class="flow-node">
    <rect x="716" y="158" width="188" height="72" rx="8" />
    <text class="flow-node-title" x="810" y="189">Security review</text>
    <text class="flow-node-sub" x="810" y="211">second agent checks diff</text>
  </g>
  <g class="flow-node">
    <rect x="716" y="302" width="188" height="72" rx="8" />
    <text class="flow-node-title" x="810" y="333">SAST</text>
    <text class="flow-node-sub" x="810" y="355">code analysis</text>
  </g>
  <g class="flow-node">
    <rect x="507" y="302" width="188" height="72" rx="8" />
    <text class="flow-node-title" x="601" y="333">Deps and secrets</text>
    <text class="flow-node-sub" x="601" y="355">scan, SBOM, secrets</text>
  </g>
  <g class="flow-node">
    <rect x="298" y="302" width="188" height="72" rx="8" />
    <text class="flow-node-title" x="392" y="333">DAST</text>
    <text class="flow-node-sub" x="392" y="355">tests a live build</text>
  </g>
  <g class="flow-node">
    <polygon points="182,294 276,338 182,382 88,338" />
    <text class="flow-node-title" x="182" y="344">Gate: pass?</text>
  </g>
  <g class="flow-node">
    <rect x="88" y="459" width="188" height="72" rx="8" />
    <text class="flow-node-title" x="182" y="490">Report</text>
    <text class="flow-node-sub" x="182" y="512">findings, model, SBOM</text>
  </g>
  <g class="flow-node flow-node--key">
    <rect x="298" y="459" width="188" height="72" rx="8" />
    <text class="flow-node-title" x="392" y="490">Ship and store</text>
    <text class="flow-node-sub" x="392" y="512">saves the record</text>
  </g>
</svg>
`;
