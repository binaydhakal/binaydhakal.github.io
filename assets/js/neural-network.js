document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('neural-network');
    const ctx = canvas.getContext('2d');

    // Set canvas size
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // Neural network elements
    const nodes = [];
    const arrows = [];
    const nodeCount = 80;
    const connectionRadius = 200;
    const arrowSpeed = 2;
    const arrowLength = 10;

    // Create nodes
    for (let i = 0; i < nodeCount; i++) {
        nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            radius: 2
        });
    }

    // Arrow creator function
    function createArrow(startNode, endNode) {
        const dx = endNode.x - startNode.x;
        const dy = endNode.y - startNode.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        return {
            startX: startNode.x,
            startY: startNode.y,
            endX: endNode.x,
            endY: endNode.y,
            progress: 0,
            speed: arrowSpeed / distance,
            color: `rgba(189, 52, 254, ${Math.random() * 0.5 + 0.5})`
        };
    }

    // Draw arrow function
    function drawArrow(ctx, x1, y1, x2, y2, progress) {
        const dx = x2 - x1;
        const dy = y2 - y1;
        const angle = Math.atan2(dy, dx);
        
        const currentX = x1 + dx * progress;
        const currentY = y1 + dy * progress;
        
        // Draw arrow head
        ctx.beginPath();
        ctx.moveTo(currentX, currentY);
        ctx.lineTo(
            currentX - arrowLength * Math.cos(angle - Math.PI / 6),
            currentY - arrowLength * Math.sin(angle - Math.PI / 6)
        );
        ctx.moveTo(currentX, currentY);
        ctx.lineTo(
            currentX - arrowLength * Math.cos(angle + Math.PI / 6),
            currentY - arrowLength * Math.sin(angle + Math.PI / 6)
        );
        ctx.stroke();
    }

    // Periodically create new arrows
    setInterval(() => {
        const startNode = nodes[Math.floor(Math.random() * nodes.length)];
        const endNode = nodes[Math.floor(Math.random() * nodes.length)];
        const distance = Math.sqrt(
            Math.pow(endNode.x - startNode.x, 2) + 
            Math.pow(endNode.y - startNode.y, 2)
        );
        
        if (distance < connectionRadius) {
            arrows.push(createArrow(startNode, endNode));
        }
    }, 200);

    function animate() {
        ctx.fillStyle = 'rgba(10, 25, 47, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw nodes
        nodes.forEach(node => {
            node.x += node.vx;
            node.y += node.vy;

            // Wrap around edges
            if (node.x < 0) node.x = canvas.width;
            if (node.x > canvas.width) node.x = 0;
            if (node.y < 0) node.y = canvas.height;
            if (node.y > canvas.height) node.y = 0;

            // Draw node
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(189, 52, 254, 0.8)';
            ctx.fill();
        });

        // Draw connections
        nodes.forEach((node1, i) => {
            nodes.slice(i + 1).forEach(node2 => {
                const dx = node2.x - node1.x;
                const dy = node2.y - node1.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < connectionRadius) {
                    ctx.beginPath();
                    ctx.moveTo(node1.x, node1.y);
                    ctx.lineTo(node2.x, node2.y);
                    const opacity = (1 - distance/connectionRadius) * 0.2;
                    ctx.strokeStyle = `rgba(189, 52, 254, ${opacity})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            });
        });

        // Update and draw arrows
        for (let i = arrows.length - 1; i >= 0; i--) {
            const arrow = arrows[i];
            arrow.progress += arrow.speed;
            
            if (arrow.progress >= 1) {
                arrows.splice(i, 1);
                continue;
            }

            ctx.strokeStyle = arrow.color;
            ctx.lineWidth = 2;
            
            // Draw arrow path
            const currentX = arrow.startX + (arrow.endX - arrow.startX) * arrow.progress;
            const currentY = arrow.startY + (arrow.endY - arrow.startY) * arrow.progress;
            
            ctx.beginPath();
            ctx.moveTo(arrow.startX, arrow.startY);
            ctx.lineTo(currentX, currentY);
            ctx.stroke();
            
            // Draw arrow head
            drawArrow(ctx, arrow.startX, arrow.startY, arrow.endX, arrow.endY, arrow.progress);
        }

        requestAnimationFrame(animate);
    }

    animate();
}); 