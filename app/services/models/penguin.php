<?php

class Penguin implements JsonSerializable {

        private $commonName = '', 
                $scientificName = '';

        public function __construct($cname, $sciname) {
            
            $this->commonName = $cname;
            $this->scientificName = $sciname;
        }

        public function jsonSerialize() {
            return [
                'commonName' => $this->commonName,
                'scientificName' => $this->scientificName
            ];
        }
    }
