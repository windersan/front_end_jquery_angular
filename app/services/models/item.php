<?php

class item implements JsonSerializable {

        private $itemName = '', 
                $itemId = '';

        public function __construct($n, $id) {
            
            $this->itemName = $n;
            $this->itemId = $id;
        }

        public function jsonSerialize() {
            return [
                'itemName' => $this->itemName,
                'itemId' => $this->itemId
                
              
            ];
        }
    }

