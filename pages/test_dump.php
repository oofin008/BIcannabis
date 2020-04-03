<?php
    include 'example.php';


    $xmlobj = new SimpleXMLElement($xmlstr);
    
    echo "Count of recipes = " . count($xmlobj->MAS_RECIPE);
    echo "<pre>";
    foreach($xmlobj->MAS_RECIPE as $recipe){
        echo "<p> {$recipe->LICENSE_PLACE} </p>";
    }
    echo "</pre>";

?>