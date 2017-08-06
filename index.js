<!DOCTYPE HTML>

<html>

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>My Website</title>
</head>
<body>
<script type="text/javascript" src="data.json"></script>
<script type="text/javascript" src="index.js"></script>
<script>
var scart = new webshop ();
scart.PayPal.business = "sandboxpaypal@com";
scart.inventory.Add ("Pasta", "Italian","20.00","Pasta""http://www.seriouseats.com/images/2017/03/20170306-fast-pasta-recipes-roundup-collage.jpg")
</script>
</body>

<div class="container-fluid">
  <div id="Pastafood"> </div>
    <h2> A new webshop</h2>
  </div>
  <input type ="button" onclick ="scart.Show" value ="Show cart"/>
  <div class = "row text-center">
    <div class = "col-xs-12">
      <button id = "Find random stuff" class = "btn btn-primary">
        Find random stuff
      </button>
    </div>
  </div>
</html>
