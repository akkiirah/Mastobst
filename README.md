# Anleitung

### Schritt 1

Klicken Sie auf den grünen Knopf "Code" und wählen Sie anschließend im Dropdown Menü "Download Zip" um die Dateien Herunterzuladen.

### Schritt 2

Öffnen Sie den Ordner in Visual Studio Code.

### Schritt 3

Herunterladen der Extension '[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)'


### Schritt 4

Navigieren Sie innerhalb von Visual Studio Code auf die index.html (public_html/html/index.html)<br>
Zuletzt klicken Sie auf "Go Live" am unteren rechten Bildschirmrand.<br>
(Falls dieser Knopf nicht da ist, versuchen Sie einmal VSCode neuzustarten)<br>
Hiermit öffnet sich nun ein Browserfenster mit der Startseite. Nun können Sie wie gewünscht auf den Seiten navigieren.<br>

<br>

## Mögliche Fehler

### Bilder werden nicht angezeigt

Hier haben Sie den falschen Ordner geöffnet, weshalb die Pfade von den Bildern oder auch Dateien nicht mehr korrekt abgerufen werden können.<br>
Stellen Sie sicher, dass Sie den Ordner mit dem Namen 'Mastobst-main' öffnen und in Visual Studio Code der erste Ordner 'public_html' ist.<br>

<br>
<br>

## SCSS Anpassungen

Da wir den CSS pre-processor SCSS verwenden, ist zum Bearbeiten eine weitere Extension in VSCode zzgl. config Anpassung notwendig.<br>
Folgende Schritte sind notwendig um, dass Änderungen in eine einzelne main.css komprimiert werden. Diese CSS-Datei ist auf jeder Seite eingebunden.<br>
Ohne diese Schritte würden von den einzelnen SCSS Dateien gleichnamige CSS Dateien erstellt werden, welche nicht eingebunden werden.<br>

### Schritt 1

Herunterladen der Extension '[Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass)'

### Schritt 2

Klicken Sie in VSCode unten links auf das Zahnrad und wählen Sie 'settings' oder 'Einstellungen' je nach Sprache.<br>
Suchen Sie nun in der oberen Leiste nach 'liveSassCompile.settings.formats' und klicken Sie beim ersten Suchergebnis auf 'Edit in settings.json'.<br>

### Schritt 3

Nun müssen Sie hier noch folgendes json einfügen und dann abspeichern:
```
  "liveSassCompile.settings.formats": [
    {
      "format": "compressed",
      "extensionName": ".css",
      "savePath": "~/../css",
      "savePathReplacementPairs": null
    }
  ]
```

### Schritt 4

Zuletzt muss in der Leiste unten, wo Sie auch auf 'Go Live' zum Server starten geklickt haben auf 'Watch Sass' geklickt werden.<br>
(Falls dieser Knopf nicht da ist, versuchen Sie einmal VSCode neuzustarten)<br>
Nun wird einmal der gesamte SCSS Inhalt kompiliert und darauffolgende Änderungen automatisch kompiliert.<br>

<br>

## Quellenangaben

### Schriftart:

    https://www.cufonfonts.com/font/sf-pro-display

### Icons

    https://www.flaticon.com/de/kostenloses-icon/fax_2611590
    https://www.flaticon.com/de/kostenloses-icon/pfeilspitze-der-wiedergabetaste_27223
    https://www.flaticon.com/de/kostenloses-icon/pause_37505
    https://www.flaticon.com/de/kostenloses-icon/mail_646094
    https://www.flaticon.com/de/kostenloses-icon/anruf_126509
    https://www.flaticon.com/free-icon/arrow-up_8287014
    https://www.flaticon.com/free-icon/download_3502477
    https://www.flaticon.com/de/kostenloses-icon/buchstabe-x_109602

### Shop

    https://frischehelden.shop/Ananas-Mini/100500005
    https://akorn.tech/de/products-apple/
    https://www.granini.de/fruchtlexikon/die-aprikose
    https://readytoeat.de/reife-avocado.html
    https://www.dole.com/en/produce/fruits/bananas
    https://www.frischehelden.shop/Birne-Conference/100300005
    https://www.unsereheimat.de/unsere-produkte/details/392-brombeere/
    https://www.jctropicals.us/blog/products/dry-coconut/
    https://www.andreashof-zuerker.de/produkt/erdbeeren/
    https://granatapfelsaft.de/
    https://etepetete-bio.de/obst-und-gemueseglossar-detail/grapefruit
    https://futterplan.net/hagebutten-fuer-den-hund/
    https://www.riccardo-zigarette.de/Riccardo-Aroma-Heidelbeer-10-ml
    https://www.unsereheimat.de/unsere-produkte/details/389-himbeere/
    https://www.aronia-original.de/beerenblog/produkte/johannisbeere
    http://www.frutal-gmbh.com/sortiment/kirschen
    https://www.cobana.com/produkte/kiwi/
    https://www.dole.com/de-de/produce/fruits/litchi
    https://hellobazaar.de/shop/mango/
    https://glycemic-index.net/de/nektarine-frisches-obst/
    https://proto.gr/de/orange
    https://hellobazaar.de/shop/papaya/
    https://www.riccardo-zigarette.de/Riccardo-Aroma-Pfirsich-10-ml
    https://www.dole.com/de-de/produce/fruits/plums
    https://www.schwartau.de/gelee-quitte
    https://www.frischehelden.shop/Carambola/100500006
    https://shop.rewe.de/c/trauben/
    https://www.riccardo-zigarette.de/Riccardo-Aroma-Melone-Wassermelone-10-ml
    https://www.riccardo-zigarette.de/Riccardo-Aroma-Zitrone-10-ml

 ### Über uns ###
Zwei Bilder von Teams, die der Lehrer für uns bereitgestellt hat. von mir photoshopt
https://www.jurassicfruit.com/de/p952/entdeckerbox-exotische-fruchte
https://cdn.jurassicfruit.com/static/images/how-it-works/customer.jpg?t=1701370845
https://cdn.jurassicfruit.com/static/selfies/180/Selfie22.jpg?t=1663222703
https://cdn.jurassicfruit.com/static/selfies/180/Selfie25.jpg?t=1663222703
https://www.fruiton.de/media/pages/home/modules/obst-lieferservice/dae0c32cf7-1693830392/von-vorne-80x.png
https://www.fruiton.de/media/pages/home/modules/obst-lieferservice/bcc9570680-1693828911/premium-obstkorb-80x.png
https://www.fruiton.de/media/pages/home/modules/obst-lieferservice/d0cec87e3c-1693828477/kostenlose-obstlieferung-80x.png
https://www.fruiton.de/media/pages/home/modules/obst-lieferservice/fd8b93104d-1693828223/obst-bestellung-80x.png

### Anmeldung ###
https://www.pexels.com/de-de/foto/foto-des-orangenhaufens-2084239/
https://www.pexels.com/de-de/foto/mann-im-grunen-poloshirt-stehend-746916/
https://www.pexels.com/photo/hand-of-a-person-holding-yellow-fruit-near-clear-glass-8004095/
https://www.pexels.com/de-de/foto/person-die-rote-und-gelbe-frucht-halt-1165502/

### banner##
https://www.pexels.com/de-de/foto/flatlay-fotografie-von-fruchten-1334131/
https://www.pexels.com/de-de/foto/fashion-person-frau-einkaufen-9811155/
https://www.pexels.com/de-de/foto/gesund-suss-farbe-frucht-4113802/
https://www.pexels.com/de-de/foto/gesund-saat-suss-farbe-4113826/
https://www.pexels.com/photo/assorted-fruits-on-brown-woven-basket-6707512/
https://www.pexels.com/photo/person-holding-a-basket-of-fruits-6707511/

##footer ##
https://cdn.jurassicfruit.com/static/images/google-rating.png?t=1701370845
https://cdn.jurassicfruit.com/static/images/ekomi-rating.png?t=1701370845
