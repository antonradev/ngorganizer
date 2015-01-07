<?php

class Tasks_model extends CI_Model {

    public function __construct() {
        $this->load->database();
    }

    public function get_tasks($posts_array = FALSE) {
        if ($posts_array === FALSE) {
            $this->db->select('id, name, description, assigned_to, status, status_code, created_date, end_date');
            $this->db->from('tasks');
            $query = $this->db->get();
            return $query->result_array();
        }
        $query = $this->db->get_where('tasks', array('tasks' => $tasks));
        return $query->row_array();
    }

    public function get_task($id) {
        $this->db->select('id, name, description, assigned_to, status, status_code, created_date, end_date');
        $query = $this->db->get_where('tasks', array('id' => $id));
        return $query->row();
    }

    /*
      public function post_post() {
      $_POST = json_decode(file_get_contents('php://input'), true);
      $data = array(
      'user_id' => '1',
      'post_date' => date('Y-m-d H:i:s'),
      'post_content' => $_POST['post_content'],
      'post_mood' => $_POST['post_mood']
      );
      $this->db->insert('posts', $data);
      }
     */
}
