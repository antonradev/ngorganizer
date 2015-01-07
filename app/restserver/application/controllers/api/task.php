<?php

defined('BASEPATH') OR exit('No direct script access allowed');
/**
 * Task
 *
 * This is an example of a few basic user interaction methods you could use
 * all done with a hardcoded array.
 *
 * @package		CodeIgniter
 * @subpackage	Rest Server
 * @category	Controller
 * @author		Phil Sturgeon
 * @link		http://philsturgeon.co.uk/code/
 */
// This can be removed if you use __autoload() in config.php OR use Modular Extensions
require APPPATH . '/libraries/REST_Controller.php';

class Task extends REST_Controller {

    function __construct() {
        // Construct our parent class
        parent::__construct();

        // Configure limits on our controller methods. Ensure
        // you have created the 'limits' table and enabled 'limits'
        // within application/config/rest.php
        $this->methods['task_get']['limit'] = 500; //500 requests per hour per user/key
        $this->methods['task_post']['limit'] = 100; //100 requests per hour per user/key
        $this->methods['task_delete']['limit'] = 50; //50 requests per hour per user/key

        $this->load->model('tasks_model');
    }

    function tasksingle_get($id) {
        if (!$this->get('id')) {
            $this->response(NULL, 400);
        }

        $task = $this->tasks_model->get_task($this->get('id'));

        if ($task) {
            $this->response($task, 200); // 200 being the HTTP response code
        } else {
            $this->response(array('error' => 'User could not be found'), 404);
        }
    }

    function task_post() {
        //$this->some_model->updateUser( $this->get('id') );
        $message = array('id' => $this->get('id'), 'name' => $this->post('name'), 'email' => $this->post('email'), 'message' => 'ADDED!');

        $this->response($message, 200); // 200 being the HTTP response code
    }

    function task_delete() {
        //$this->some_model->deletesomething( $this->get('id') );
        $message = array('id' => $this->get('id'), 'message' => 'DELETED!');

        $this->response($message, 200); // 200 being the HTTP response code
    }

    function tasks_get() {
        //$users = $this->some_model->getSomething( $this->get('limit') );

        $tasks = $this->tasks_model->get_tasks();


        if ($tasks) {
            $this->response($tasks, 200); // 200 being the HTTP response code
        } else {
            $this->response(array('error' => 'Couldn\'t find any users!'), 404);
        }
    }

    public function send_post() {
        var_dump($this->request->body);
    }

    public function send_put() {
        var_dump($this->put('foo'));
    }

}
