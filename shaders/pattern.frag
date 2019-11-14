#version 330 compatibility

uniform float	uTime;		// "Time", from Animate( )
in vec2  	vST;		// texture coords
uniform int uAnimateFragment;
uniform vec3 uColor;

float TimeLast;

void
main( )
{	
	vec3 myColor = uColor;

	
	gl_FragColor = vec4( myColor,  1. );
}
