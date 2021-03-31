import {$} from '@core/dom';

export function resizeHandler($root, event) {
  return new Promise(resolve => {
    const $resizer = $(event.target);
    const $parent = $resizer.closest('[data-type="resizable"]');
    const coords = $parent.getCords();
    const tableElementType = $resizer.data.resize;
    const sideProp = tableElementType === 'col' ? 'bottom' : 'right';
    let resizeValue;
    $resizer.css({
      opacity: 1,
      [sideProp]: '-2000px',
      zIndex: 100,
    });

    document.onmousemove = (e) => {
      if (tableElementType === 'col') {
        const colDelta = e.pageX - coords.right;
        resizeValue = coords.width + colDelta;
        $resizer.css({
          right: -colDelta + 'px',
        });
      } else {
        const rowDelta = e.pageY - coords.bottom;
        resizeValue = coords.height + rowDelta;
        $resizer.css({
          bottom: -rowDelta + 'px',
        });
      }
    };
    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
      if (tableElementType === 'col') {
        $parent.css({
          width: resizeValue + 'px',
        });
        $root
            .findAll(`[data-col="${$parent.data.col}"]`)
            .forEach((el) => (el.style.width = resizeValue + 'px'));
      } else {
        $parent.css({
          height: resizeValue + 'px',
        });
      }
      resolve({
        resizeValue,
        tableElementType,
        id: $parent.data[tableElementType],
      });
      $resizer.css({
        opacity: 0,
        bottom: 0,
        right: 0,
      });
    };
  })
}
