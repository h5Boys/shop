<template>
  <section class="goodsCart">
    <goods-cart-section_empty></goods-cart-section_empty>
    <goods-cart-section_list></goods-cart-section_list>
  </section>
</template>

<script type="text/ecmascript-6">
import goodsCartSection_empty from './goodsCartSection_empty.vue'
import goodsCartSection_list from './goodsCartSection_list.vue'
export default {
  components:{
    goodsCartSection_empty,
    goodsCartSection_list
  },
  mounted(){
    //单选、复选、反选
//jQuery插件
    jQuery.fn.extend(
      {
        //根据传入的值，决定是选择，还是取消
        "checkAll":function(isCheck){
          this.each(function(){
            this.checked = isCheck;
          });
        },
        //反选
        "notCheck":function(){
          this.each(function(){
            this.checked = !this.checked;
          });
        }
      }
    );
    $(function(){
      $("#allChecked").live("click",function(){
        $(":checkbox").checkAll($("#allChecked").attr("checked"));
      });
      //反向控制的思路：
      //点击每一个复选框时，需要遍历所有的复选框，看看是否有没选中的。
      $(".goodsChecked").live("click",function(){
        var allChecked = true;
        for(var i=0;i<$(".goodsChecked").length;i++){
          if(!$(".goodsChecked")[i].checked){
            allChecked = false;
            break;
          }
        }
        $("#allChecked").attr("checked",allChecked);
      });
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
