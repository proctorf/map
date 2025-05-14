window.onload = function () {
  var map = new ImageMapPro("#image-map-pro", {
  "id": "ceb8bef3-d7ab-4236-aa86-d49a45b5f023",
  "general": {
    "name": "Ace-Morgan"
  },
  "artboards": [
    {
      "id": "224ec9a3-c28c-4e52-940d-ef5e3b411ff5",
      "title": "Basement Floor",
      "background_type": "image",
      "image_url": "https://raw.githubusercontent.com/norac-2803/Ace-Morgan/main/images/basement_floor.png",
      "children": [
        {
          "id": "e6920b81-4330-4055-a5d3-983827140069",
          "title": "The Green Room",
          "type": "rect",
          "x": 30.476937204037075,
          "y": 54.236110051472984,
          "width": 10.84905660377358,
          "height": 10.624999999999993,
          "default_style": {
            "border_width": 3,
            "border_color": "#c62f2f"
          },
          "tooltip_style": {
            "position": "left",
            "auto_width": false,
            "offset_y": 1
          },
          "tooltip_content": [
            {
              "type": "Heading",
              "text": "The Green Room",
              "heading": "h3",
              "style": {
                "fontFamily": "sans-serif",
                "fontSize": 20.8,
                "color": "#ffffff",
                "textAlign": "left"
              },
              "boxModel": {
                "padding": {
                  "top": 10,
                  "bottom": 10,
                  "left": 10,
                  "right": 10
                }
              }
            }
          ]
        }
      ]
    }
  ],
  "version": "6.0.33"
});
};
