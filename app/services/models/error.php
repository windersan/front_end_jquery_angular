<?php

class Error1 implements JsonSerializable {

        private $errorMessage = '', 
                $httpCode = 400;

        public function __construct($message, $httpStatusCode) {
            
            $this->errorMessage = $message;
            $this->httpCode = $httpStatusCode;
        }

        public function jsonSerialize() {
            return [
                'errorMessage' => $this->errorMessage,
                'httpCode' => $this->httpCode
            ];
        }
    }
