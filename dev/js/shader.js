var config = {};

$(function() {

    var $body = $(document.body),
        $window = $(window);

    // Background
    var canvas = document.createElement('canvas');

    backgroundEnabled = canvas.getContext && canvas.getContext('2d') && $('#background-container').css('display') != 'none';

    if (backgroundEnabled) {
        config.background = {
            enabled: true,

            RENDER: {
				// Takes all the information in a Scene and renders it to a context.
                // A Scene sits at the very top of the stack. It simply manages arrays of Mesh & Light objects.
				renderer: 'canvas'
            },

            MESH: {
							ambient: '#787878', // Default
              diffuse: '#FFFFFF', // Default
              width: 1.1, // Triangle Width
              height: 1.1, // Triangle Height
              depth: 18, // Transparency of the triangles
              segments: 12, // Number of triangles to display in 1 row
              slices: 8, // Number of triangles to display in 1 column
              xRange: 0.18, // Wideness of the triangles in X Position
              yRange: 0.18, // Wideness of the triangles in Y Position
              zRange: 1.0, // Wideness of the triangles in Z Position
              speed: 0.0008 // Speed of the moving traingles
            },

            LIGHT: {
							autopilot: true, // Set this to true if you want the light to follow your mouse cursor
							ambient: '#4a004a',
              diffuse: '#130aaa',
							count: 1, // Contrast
              zOffset: 99,
							xyScalar: 1.5,
              speed: 0.001,
              gravity: 1500,
              dampening: 0.15,
              minLimit: 8,
              maxLimit: null,
              minDistance: 10,
              maxDistance: 600,
              draw: false // Set to true if you want to just draw a background image (static).
            }
        }
		// Initialize the background
        initBackground();
    }
});