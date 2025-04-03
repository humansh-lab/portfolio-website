document.addEventListener('DOMContentLoaded', () => {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorRing = document.querySelector('.cursor-ring');
    
    // Show cursors when mouse moves
    document.addEventListener('mousemove', () => {
        cursorDot.style.opacity = '1';
        cursorRing.style.opacity = '1';
    });
    
    // Update cursor position
    const updateCursorPosition = (e) => {
        cursorDot.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
        
        // Add slight delay to ring for smooth effect
        setTimeout(() => {
            cursorRing.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
        }, 50);
    };
    
    document.addEventListener('mousemove', updateCursorPosition);
    
    // Handle cursor interactions
    const handleLinkHoverEvents = () => {
        const interactiveElements = document.querySelectorAll('a, button, [role=button], input, textarea');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorDot.style.width = '20px';
                cursorDot.style.height = '20px';
                cursorDot.style.backgroundColor = 'transparent';
                cursorDot.style.border = '1px solid rgba(245, 236, 220, 0.5)';
                cursorDot.style.transform = `translate(${parseInt(cursorDot.style.transform.split('(')[1]) - 4}px, ${parseInt(cursorDot.style.transform.split(',')[1]) - 4}px)`;
                
                cursorRing.style.width = '50px';
                cursorRing.style.height = '50px';
                cursorRing.style.transform = `translate(${parseInt(cursorRing.style.transform.split('(')[1]) - 5}px, ${parseInt(cursorRing.style.transform.split(',')[1]) - 5}px)`;
            });
            
            el.addEventListener('mouseleave', () => {
                cursorDot.style.width = '12px';
                cursorDot.style.height = '12px';
                cursorDot.style.backgroundColor = 'rgba(245, 236, 220, 0.5)';
                cursorDot.style.border = 'none';
                
                cursorRing.style.width = '40px';
                cursorRing.style.height = '40px';
            });
        });
    };
    
    // Handle mouse down/up events
    document.addEventListener('mousedown', () => {
        cursorDot.style.transform = `${cursorDot.style.transform.split(')')[0]} scale(0.8))`;
        cursorRing.style.transform = `${cursorRing.style.transform.split(')')[0]} scale(0.8))`;
    });
    
    document.addEventListener('mouseup', () => {
        cursorDot.style.transform = `${cursorDot.style.transform.split(')')[0]} scale(1))`;
        cursorRing.style.transform = `${cursorRing.style.transform.split(')')[0]} scale(1))`;
    });
    
    // Initialize hover events
    handleLinkHoverEvents();
    
    // Handle cursor leaving the window
    document.addEventListener('mouseleave', () => {
        cursorDot.style.opacity = '0';
        cursorRing.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', () => {
        cursorDot.style.opacity = '1';
        cursorRing.style.opacity = '1';
    });
});