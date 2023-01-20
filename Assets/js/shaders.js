 
//thank you mozilla website
function createShader(gl, sourceCode, type) {
  // Compiles either a shader of type gl.VERTEX_SHADER or gl.FRAGMENT_SHADER
  const shader = gl.createShader(type);
  gl.shaderSource(shader, sourceCode);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader);
    throw `Could not compile WebGL program. \n\n${info}`;
  }
  return shader;
} 

//vertex shader 
const vertexShaderSource =  
  '#version 100\n' 
  'attribute vec4 position;\n' +
  'void main() {\n' +
  '  gl_Position = position;\n' +
  '}\n';

//Use the createShader function from the example above
const vertexShader = createShader(gl, vertexShaderSource, gl.VERTEX_SHADER)
 
 //fragment shader  
 const fragmentShaderSource = 
  '#version 100\n' 
  'void main() {\n' +
  '  gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n' +
  '}\n';

//Use the createShader function from the example above
const fragmentShader = createShader(gl, fragmentShaderSource, gl.FRAGMENT_SHADER)
