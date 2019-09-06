<?php

// TODO: extract into its own library
class PdfApi
{
    /**
     * Just 'password'
     * @var array
     */
    private $options;

    /**
     * PdfApi constructor.
     * @param array $options
     */
    public function __construct($options = array())
    {
        $this->options = $options;
    }

    public function convert($input, $options = array(), $raw = false)
    {
        $params = array(
            'html_base64' => base64_encode($input),
            'options' => $options
        );

        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, "http://wkhtmltopdf.api.ctbuh.org/v1/convert");
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        // optional
        //curl_setopt($ch, CURLOPT_ENCODING, "");
        curl_setopt($ch, CURLOPT_TIMEOUT, 10);

        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($params));
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            "Cache-Control: no-cache",
            'Content-Type: application/x-www-form-urlencoded'
        ));

        $res = curl_exec($ch);
        curl_close($ch);

        $json = json_decode($res, true);

        if (is_array($json)) {
            return $json['pdf_base64'];
        }

        return null;
    }
}
