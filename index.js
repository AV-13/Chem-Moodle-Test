import { dia, shapes } from '@joint/core';

import './styles.css';

// create paper
const namespace = shapes;

const graph = new dia.Graph({}, { cellNamespace: namespace });

const paper = new dia.Paper({
    el: document.getElementById('paper'),
    model: graph,
    width: 300,
    height: 300,
    background: { color: '#FAFBFB' },
    cellViewNamespace: namespace
});
const rect1 = new shapes.standard.Rectangle();
rect1.position(25, 25);
rect1.resize(180,50);
rect1.addTo(graph);

const rect2 = new shapes.standard.Rectangle();
rect2.position(95, 225);
rect2.resize(180, 50);
rect1.addTo(graph);
rect1.attr('body', { stroke: '#C94A46', rx: 2, ry: 2 });
rect2.attr('body', { stroke: '#C94A46', rx: 2, ry: 2 });
rect1.attr('label', { text: 'Hello', fill: '#353535' });
rect2.attr('label', { text: 'World!', fill: '#353535' });
