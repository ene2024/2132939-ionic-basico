package com.example.app;

import android.content.Intent;
import android.os.Bundle;


import com.getcapacitor.BridgeActivity;

import java.util.Timer;
import java.util.TimerTask;

public class MainActivity extends BridgeActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    TimerTask tarea = new TimerTask(){
      @Override
      public void run(){
        Intent intent = new Intent(MainActivity.this, PrincipalActivity.class);
        startActivity(intent);
        finish();
      }
    };

    Timer tiempo = new Timer();
    tiempo.schedule(tarea,3000);
  }
}
