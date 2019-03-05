$(function(){
  var $width=$('#width'),
      $heigth=$("#length"),
      $btnCal=$("#btnCal"),
      $perimeter=$('#perimeter'),
      $area=$('#area');

$btnCal.click(function(){
    var w=Number($width.val()),
         h=Number($heigth.val());
    var p=2 *(w+h),
        a=w*h;
     $perimeter. val(p);
     $area.val(a);
  }
})
